// React
import { Fragment } from 'react';

// Packages
import { useParams } from 'react-router-dom';

// Components & Elements
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const Detail = () => {
  const { id } = useParams();
  
  return (
    <Fragment>
      <Header />
      <Footer />
    </Fragment>
  );
};

export default Detail;
