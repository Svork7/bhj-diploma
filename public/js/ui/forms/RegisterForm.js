/**
 * Класс RegisterForm управляет формой
 * регистрации
 * */
class RegisterForm extends AsyncForm {
  /**
   * Производит регистрацию с помощью User.register
   * После успешной регистрации устанавливает
   * состояние App.setState( 'user-logged' )
   * и закрывает окно, в котором находится форма
   * */
  onSubmit = (data) => {
    User.register(data, (err, response) => {
      if (err === null && response.success) {
        User.setCurrent(response.user)
        App.setState('user-logged')
        App.getModal('register').close()
        element.reset()
      } else {
        alert('User already registered')
      }
    })
  }
}
