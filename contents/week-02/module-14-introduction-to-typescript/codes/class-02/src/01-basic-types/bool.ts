let isActive: boolean;

isActive = true;

function userIsActive(userStats: boolean) {
  return userStats ? 'User is active!' : 'User is inactive!';
}

console.log(userIsActive(true));