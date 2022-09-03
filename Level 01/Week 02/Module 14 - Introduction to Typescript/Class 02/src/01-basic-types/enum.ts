/*
enum Permission {
  admin = 'ADMIN',
  editor = 'EDITOR',
  default = 'DEFAULT',
}

let user = {
  level: 'ADMIN'
}
*/

enum Permission {
  admin,
  editor,
  default,
}

let user = {
  level: Permission.admin
};

enum Colors {
  red = '#f00',
  black = '#000',
  white = '#fff'
}