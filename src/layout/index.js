import AppHeader from './AppHeader';
import AppBody from './AppBody';
import AppFooter from './AppFooter';

const layout = ({ children }) => {
  return (
    <div className="container-fluid d-flex flex-column vh-100 p-0">
      <AppHeader />
      <AppBody>{children}</AppBody>
      <AppFooter />
    </div>
  );
};

export default layout;
