

{/* Components */ }
import NavegationSet from '../components/NavegationSet';

//import CenterSection from '../components/CenterSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
//import MainContent from '../components/MainContent';

export default function Index({children}) {

  return (
    <>

      <div className="min-h-screen flex flex-col">
        {/* Header Section */}
        <Header></Header>

        {/* Navigation Section */}
        <NavegationSet></NavegationSet>

        {/* Main Content */}
        {children}

        {/* Footer */}
        <Footer></Footer>
      </div>

    </>
  );
}


