import style from './test.modules.css'


import './my-sass.scss';

const Header = () => {
  return (
    <>
      <h1 style={style.bigblue}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
}

export default Header

