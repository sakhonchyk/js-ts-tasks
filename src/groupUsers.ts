/**
 * Write a function to group two types of users into EMPLOYEE and CONTRACTOR groups
 *
 * A function should return an object consists of two arrays of grouped users:
 * {
 *   employees: [...]
 *   contractors: [...]
 * }
 * @param {Array<unknown>} users
 * @returns {Object<employees: Array<any>, contractors: Array<any>>}
 */
module.exports.groupUsers = function (users: Array<AbstractUser>): Record<'employees' | 'contractors', Array<AbstractUser>> {
  const usersResult: Record<'employees' | 'contractors', Array<AbstractUser>> = {
    employees: [],
    contractors: []
  };

  users.forEach(user => {
    if (user.type === UserType.EMPLOYEE) {
      usersResult.employees.push(user);
    }

    if (user.type === UserType.CONTRACTOR) {
      usersResult.contractors.push(user);
    }
  });

  return usersResult;
};

type AbstractUser = Employee | Contractor;

interface User {
  name: string;
  login: string;
  surname: string;
  type: UserType;
}

interface Employee extends User {
  address: {
    officeId: number;
    placeId: number;
  };
}

interface Contractor extends User {
  contractorCompanyName: string;
}

enum UserType {
  EMPLOYEE = 'EMPLOYEE',
  CONTRACTOR = 'CONTRACTOR'
}
