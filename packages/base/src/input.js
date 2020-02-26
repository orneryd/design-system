import { generateId } from '../../base/src/base'

export default superclass =>
  class extends superclass {
    set value(newValue) {
      this.setAttribute('value', newValue)
    }

    get disabled() {
      return this.hasAttribute('disabled')
    }

    get value() {
      return this.getAttribute('value') || ''
    }

    set value(newVal) {
      this.setAttribute('value', newVal)
    }

    get inputId() {
      // generate an ID that is almost guaranteed 
      // to be uniqe so we don't end up with bad broswer behavior
      return generateId(this.getAttribute('id'))
    }

    get required() {
      return this.hasAttribute('required') ? 'required' : ''
    }

    get pattern() {
      return this.getAttribute('pattern') || '.*'
    }

    get label() {
      return this.getAttribute('label') || this.getAttribute('type') || ''
    }

    get validationMessage() {
      return (
        super.validationMessage ||
        this.getAttribute('validation-message') ||
        `${this.value} does not match ${this.pattern}`
      )
    }

    get inputElement() {
      const root = this.shadowRoot || this
      return root.querySelector('input') || super.inputElement
    }

    setValid() {
      this.setAttribute('valid', 'true')
      this.classList.remove('invalid')
      this.classList.add('valid')
      this.notifyValidity('')
    }

    setInvalid() {
      this.setAttribute('valid', 'false')
      this.classList.remove('valid')
      this.classList.add('invalid')
      this.notifyValidity(this.validationMessage)
    }

    reset(newVal) {
      super.reset && super.reset()
      this.inputElement.value = newVal
      this.value = newVal
      this.classList.remove('valid')
      this.classList.remove('invalid')
      if (this.required) {
        this.notifyValidity(this.validationMessage)
      }
    }

    addFormInput() {
      this.clone && this.removeChild(this.clone)
      this.clone = this.inputElement.cloneNode()
      Object.defineProperty(this.clone, 'value', {
        set: newVal => this.reset(newVal),
        get: () => this.value
      })
      //override the id generation for the form so that we don't show the auto-generated suffix.
      Object.defineProperty(this.clone, 'id', {
        get: () => this.getAttribute('id')
      })
      this.appendChild(this.clone)
    }

    notifyValidity(message = '') {
      this.addFormInput()
      this.clone.setCustomValidity(message)
    }

    setValidity() {
      // assume we are valid first
      let valid = true
      // check if input is a required field and we have a value
      // if not required, our assumption that we are valid is correct.
      if (this.required && !this.value) {
        // if we have no value set validity false.
        valid = false
      }
      // or check to see if we have a pattern to match against
      // if the value doesn't match against the pattern, set valid false.
      if (this.pattern && !this.value.toString().match(this.pattern)) {
        valid = false
      }
      // finally, set the validity.
      if (valid) {
        this.setValid()
      } else {
        this.setInvalid()
      }
    }

    connectedCallback() {
      super.connectedCallback && super.connectedCallback()
      this.addFormInput()
      if (this.required) {
        this.notifyValidity(this.validationMessage)
      }
      const attrsToAdd = []
      Array.from(this.attributes).forEach(attr => {
        if (attr.name !== 'slot' && attr.name !== 'class'&& attr.name !== 'id') {
          attrsToAdd.push(attr)
        }
      })
      attrsToAdd.forEach(attr => {
        this.inputElement.setAttribute(attr.name, attr.value)
      })
    }
  }
