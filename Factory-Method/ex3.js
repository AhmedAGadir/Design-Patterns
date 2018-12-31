// ABSTRACT CREATOR SUPERCLASS

class MembershipFactory {
    createMembership(type) {
        // abstract method
    }
    addMember(type, userInfo) {
        let membership = this.createMembership(type, userInfo);

        membership.pushToRelevantDatabase();
        membership.sendConfirmationEmail();
        membership.printCard();
        membership.activate();

        return membership;
    }
}

//  CONCRETE CREATOR SUBCLASSES

class UKMembershipFactory extends MembershipFactory {
    createMembership(type, userInfo) {
        switch (type) {
            case 'trial':
                return new UKTrialMembership(userInfo);
            case 'monthly':
                return new UKMonthlyMembership(userInfo);
            case 'anual':
                return new UKAnualMembership(userInfo);
        }
    }
}

class GermanMembershipFactory extends MembershipFactory {
    createMembership(type, userInfo) {
        switch (type) {
            case 'trial':
                return new GermanTrialMembership(userInfo);
            case 'monthly':
                return new GermanMonthlyMembership(userInfo);
            case 'anual':
                return new GermanAnualMembership(userInfo);
        }
    }
}

//  ABSTRACT PRODUCT SUPERCLASS

class Membership {
    constructor(months, location, userInfo) {
        this.monthDuration = months;
        this.location = location;
        this.userInfo = userInfo;
    }
    pushToRelevantDatabase() {
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
    constructor(userInfo) {
        super(3, 'UK', userInfo)
    }
}
class UKMonthlyMembership extends Membership { }
class UKAnualMembership extends Membership { }

class GermanTrialMembership extends Membership {
    constructor(userInfo) {
        // trial length is longer in germany
        super(4, 'GERMANY', userInfo)
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

let ukMembershipFactory = new UKMembershipFactory();
ukMembershipFactory.addMember('trial', userA);

let germanMembershipFactory = new GermanMembershipFactory();
germanMembershipFactory.addMember('trial', userB);