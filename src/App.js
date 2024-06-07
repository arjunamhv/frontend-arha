import Pentest from "./components/pentest";

function App() {
  return (
    <div id="fullpage">
      {/* start home */}
      <div id="home" className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-8 wow fadeIn" data-wow-delay="0.9s">
              <h3>Solusi Keamanan Siber</h3>
              <img src="images/logo.png" alt="Logo" />
              <h2 className="rotate">
                Penetration Testing, Vulnerability Assessment, Pentest
                Simulation
              </h2>
              <p>
                ARHAMINER menawarkan solusi keamanan siber berkualitas tinggi
                untuk membantu meminimalkan risiko keamanan untuk aplikasi anda.
                Tim kami menyediakan layanan dan solusi keamanan TI yang
                komprehensif untuk melindungi klien dari ancaman siber.
              </p>
              <a
                href="#pentest"
                className="btn btn-default smoothScroll wow fadeInUp"
                data-wow-delay="1s"
              >
                Get started
              </a>
            </div>
            <div className="col-md-2" />
          </div>
        </div>
      </div>
      {/* end home */}
      {/* start work */}
      <div id="work" className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 wow bounce">
              <h2>WHAT WE DO</h2>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-4 col-xs-11 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="media">
                <div className="media-object media-left">
                  <i className="fa fa-solid fa-shield-halved" />
                </div>
                <div className="media-body">
                  <h3 className="media-heading">Vulnerability Assessment</h3>
                  <p>
                    Kami menilai kerentanan dan risiko pada situs web, aplikasi,
                    sistem TI, dan jaringan, memberikan laporan yang jelas tanpa
                    perlunya mengambil tindakan yang tepat.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 col-xs-11 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="media">
                <div className="media-object media-left">
                  <i className="fa fa-solid fa-user-secret" />
                </div>
                <div className="media-body">
                  <h3 className="media-heading">Penetration Testing</h3>
                  <p>
                    Uji Penetrasi Keamanan oleh peretas etis bersertifikat dan
                    berpengalaman untuk mengungkap kerentanan keamanan. Laporan
                    terperinci disediakan, menguraikan secara spesifik
                    kerentanan yang ditemukan dan metode
                    penyelesaian/perbaikannya.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 col-xs-11 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="media">
                <div className="media-object media-left">
                  <i className="fa fa-solid fa-unlock-keyhole" />
                </div>
                <div className="media-body">
                  <h3 className="media-heading">Pentest Simulation</h3>
                  <p>
                    Dengan melakukan Simulasi Pentest, literasi keamanan yang
                    rendah atau kerentanan keamanan pada SDM yang berisiko
                    diserang dapat diidentifikasi, dan mereka bisa segera
                    memperoleh pelatihan yang tepat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end work */}
      {/* start Pentest */}
      <div id="pentest" className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 wow fadeInUp" data-wow-delay="0.6s">
              <Pentest />
            </div>
          </div>
        </div>
      </div>
      {/* end Pentest */}
      {/* start our-team */}
      <div id="our-team" className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="wow bounce">Our Team</h2>
            </div>
            <div className="col-md-4 col-xs-6 wow fadeIn" data-wow-delay="0.6s">
              <div className="our-team-thumb">
                <img
                  src="images/our-team-img1.jpg"
                  className="img-responsive"
                  alt="our-team img"
                />
                <div className="our-team-overlay">
                  <h4>Arjuna Mahavira</h4>
                  <h5>CEO</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-xs-6 wow fadeIn" data-wow-delay="0.6s">
              <div className="our-team-thumb">
                <img
                  src="images/our-team-img2.jpg"
                  className="img-responsive"
                  alt="our-team img"
                />
                <div className="our-team-overlay">
                  <h4>Habibullah Kharis Pramudita</h4>
                  <h5>Hipster</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-xs-6 wow fadeIn" data-wow-delay="0.6s">
              <div className="our-team-thumb">
                <img
                  src="images/our-team-img3.jpg"
                  className="img-responsive"
                  alt="our-team img"
                />
                <div className="our-team-overlay">
                  <h4>Adham Roy Bhafiel</h4>
                  <h5>Hustler</h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xs-6 wow fadeIn" data-wow-delay="0.6s">
              <div className="our-team-thumb">
                <img
                  src="images/our-team-img4.jpg"
                  className="img-responsive"
                  alt="our-team img"
                />
                <div className="our-team-overlay">
                  <h4>Indah Kristiani</h4>
                  <h5>Hacker</h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xs-6 wow fadeIn" data-wow-delay="0.6s">
              <div className="our-team-thumb">
                <img
                  src="images/our-team-img5.jpg"
                  className="img-responsive"
                  alt="our-team img"
                />
                <div className="our-team-overlay">
                  <h4>Erika Putri Lestari</h4>
                  <h5>Sales and Marketing</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end our-team */}
      {/* start contact */}
      <div id="contact" className="section">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-5 col-lg-offset-1 col-md-6 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <address>
                <p className="contact-title">CONTACT US</p>
                <p>
                  <i className="fa fa-phone" /> +62-8211-6654-087
                </p>
                <p>
                  <i className="fa fa-envelope" /> bisaaimail@gmail.com
                </p>
                <p>
                  <i className="fa fa-map-marker" /> Jln. Banda A no.30 Kel. Citarum Kec. Bandung Wetan, Kota Bandung, Jawa Barat 40115
                </p>
              </address>
            </div>
            <div
              className="col-lg-6 col-md-6 col-xs-10 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              {/* eslint-disable-next-line */}
              <form action="." method="post">
                {/* eslint-disable-next-line */}
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                />
                {/* eslint-disable-next-line */}
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                />
                {/* eslint-disable-next-line */}
                <textarea
                  name="message"
                  rows={5}
                  className="form-control"
                  id="message"
                  placeholder="Your Message"
                  defaultValue={""}
                />
                {/* eslint-disable-next-line */}
                <input
                  name="send"
                  type="submit"
                  className="form-control"
                  id="send"
                  defaultValue="SEND ME"
                />
              </form>
            </div>
            <div className="col-md-1 col-sm-1" />
          </div>
        </div>
      </div>
      {/* end contact */}
      {/* start footer */}
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-12 wow fadeIn" data-wow-delay="0.9s">
              <p>
                Copyright © 2024 ARHAMINER. Studi independen bersertifikat {" "}
                <a rel="nofollow noopener" href="https://bisa.ai">
                  BISA.AI
                </a>
              </p>
              <ul className="social-icon">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-x-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* end footer */}
    </div>
  );
}

export default App;
