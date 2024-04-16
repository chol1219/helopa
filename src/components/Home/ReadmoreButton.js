import { useTranslation } from 'react-i18next'

const ReadmoreButton = () => {
  const { t }  = useTranslation(['page']);

  return (
    <div className="bg-blue-1 text-white px-10 py-6 text-center w-max">
      {t('read_more')}
    </div>
  );
};

export default ReadmoreButton;
