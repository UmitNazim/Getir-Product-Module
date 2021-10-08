import { useTranslation } from 'react-i18next';

const AppFooter = () => {
  let { t } = useTranslation();

  return (
    <footer className="app-footer text-center">
      <div className="app-footer__content">
        <span>
          &copy;{t('brand.year')} <span className="mx-3">&#8226;</span> {t('brand.policy')}
        </span>
      </div>
    </footer>
  );
};

export default AppFooter;
