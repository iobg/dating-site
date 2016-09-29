'use strict'
app.factory('UserService', ['$http', '$location', function($http, $location) {
  let userState = null
  let   userObj = null

  const register = (newUserObject) => {
    $http.post('/api/register', newUserObject)
      .then(() => $location.url('/login'))
      .catch(console.error)
  }

  const login = (loginUserObj) => {
    $http.post('/api/login', loginUserObj)
      .then(({config: {data:{email}}}) => {
        userObj = email
        userState = true
        $location.url('/home')
      })
      .catch(console.error)
  }

  const logout = () => {
    $http.post('/api/logout')
      .then(data => {
        userState = false
        userObj = null
        $location.url('/')
      })
      .catch(console.error)
  }

  const postProfile = (profile) => {
    $http.post("/api/profiles", profile)
      .then(() => {
        $location.url("/profiles");
      })
      .catch(console.error);
  }

  const getUserState = () => userState
  const getUserObj = () => userObj

  return {getUserState, getUserObj, postProfile, register, login, logout}
}])
