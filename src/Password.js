class Password {
  constructor(password) {
    this.password = password;
  }

  calculatePasswordStrength() {
    const weaknesses = [];
    weaknesses.push(this.lengthWeakness(this.password));
    weaknesses.push(this.lowercaseWeakness(this.password));
    weaknesses.push(this.uppercaseWeakness(this.password));
    weaknesses.push(this.numberWeakness(this.password));
    weaknesses.push(this.specialCharactersWeakness(this.password));
    weaknesses.push(this.repeatCharactersWeakness(this.password));
    return weaknesses;
  }

  characterTypeWeakness(regex, type) {
    const matches = this.password.match(regex) || [];

    if (matches.length === 0) {
      return {
        message: `Your password has no ${type} characters`,
        deduction: 20,
      };
    }

    if (matches.length <= 2) {
      return {
        message: `Your message could use more ${type} characters`,
        deduction: 5,
      };
    }

    return {
      message: "",
      deduction: 0,
    };
  }

  lengthWeakness() {
    const length = this.password.length;

    if (length <= 5) {
      return {
        message: "Your password is too short",
        deduction: 40,
      };
    }

    if (length <= 10) {
      return {
        message: "Your password could be longer",
        deduction: 15,
      };
    }

    return {
      message: "",
      deduction: 0,
    };
  }

  lowercaseWeakness() {
    return this.characterTypeWeakness(/[a-z]/g, "lowercase");
  }

  uppercaseWeakness() {
    return this.characterTypeWeakness(/[A-Z]/g, "uppercase");
  }

  numberWeakness() {
    return this.characterTypeWeakness(/[0-9]/g, "numbers");
  }

  specialCharactersWeakness() {
    return this.characterTypeWeakness(/[^0-9a-zA-Z\s]/g, "special characters");
  }

  repeatCharactersWeakness() {
    const matches = this.password.match(/(.)\1/g) || [];
    if (matches.length > 0) {
      return {
        message: "Your password has repeat characters",
        deduction: matches.length * 10,
      };
    }

    return {
      message: "",
      deduction: 0,
    };
  }
}

export default Password;
