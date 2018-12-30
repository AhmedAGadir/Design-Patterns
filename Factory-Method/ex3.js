// ABSTRACT CREATOR SUPERCLASS

class MembershipFactory {
    createMembership(type) {
        // abstract method
    }
    addMember(type, userInfo) {
        let membership = this.createMembership(type);

        membership.register(userInfo);
        membership.sendConfirmationEmail();
        membership.printCard();
        membership.activate();

        return membership;
    }
}

//  CONCRETE CREATOR SUBCLASSES

class UKMembershipFactory extends MembershipFactory {
    createMembership(type) {
        switch (type) {
            case 'trial':
                return new UKTrialMembership();
            case 'monthly':
                return new UKMonthlyMembership();
            case 'anual':
                return new UKAnualMembership();
        }
    }
}

class GermanMembershipFactory extends MembershipFactory {
    createMembership(type) {
        switch (type) {
            case 'trial':
                return new GermanTrialMembership();
            case 'monthly':
                return new GermanMonthlyMembership();
            case 'anual':
                return new GermanAnualMembership();
        }
    }
}

//  ABSTRACT PRODUCT SUPERCLASS

class Membership {
    constructor(months, location) {
        this.monthDuration = months;
        this.location = location;
        this.userInfo = null;
    }
    register(userInfo) {
        this.userInfo = userInfo;
        console.log(`signing up ${this.userInfo.name} to our ${this.location} branch for ${this.monthDuration} months...`);
    }
    sendConfirmationEmail() {
        console.log(`sending email confirmation to ${this.userInfo.email}...`);
    }
    printCard() {
        console.log('printing membership card...');
    }
    activate() {
        console.log('membership activated!');
    }
}

// CONCRETE PRODUCT SUBCLASSES

class UKTrialMembership extends Membership {
    constructor() {
        super(3, 'UK')
    }
}
class UKMonthlyMembership extends Membership { }
class UKAnualMembership extends Membership { }

class GermanTrialMembership extends Membership {
    constructor() {
        // trial length is longer in germany
        super(4, 'GERMANY')
    }
}
class GermanMonthlyMembership extends Membership { }
class GermanAnualMembership extends Membership { }


// RUN CODE

let userA = {
    name: 'John Smith',
    email: 'johnsmith@genericmail.co.uk',
}

let userB = {
    name: 'Tony Kroos',
    email: 'tonykroos@realmadrid.de'
}

let membershipFactory = new UKMembershipFactory();
membershipFactory.addMember('trial', userA);
membershipFactory = new GermanMembershipFactory();
membershipFactory.addMember('trial', userB);