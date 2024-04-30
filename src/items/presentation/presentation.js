import pdfcv from '../../assets/CV-AMANN-Florian.pdf';
import pfp from '../../assets/pdp.jpg';
import './presentation.css';

function Presentation({ translate }) {
  return (
    <div>
      <div className="presentation-page">
        <div className="text-picture-container">
        <div className="left-block">
          <div className="img-container">
            <img src={pfp} alt="pfp" />
          </div>
        </div>
        <div className="right-block">
          <h3 className="title">{translate("PRESENTATION")}</h3>
          <div className="txt-container">
            <p className="txt">{translate("PRESENTATION_TEXT")}</p>
          </div>
                  <div className="buttons-container">
          <a href={pdfcv} download><button className="btn-action custom-btn"> {translate('DOWNLOAD_CV')} </button></a>
          <a href="mailto:amann.florian@protonmail.com"><button className="btn-action custom-btn"> {translate('CONTACT_MAIL')} </button></a>
          <a href="https://linkedin.com/in/florian-amann/" target='_blank' rel="noreferrer"><button className="btn-action custom-btn"> {translate('LINKEDIN')} </button></a>
          <a href="https://github.com/Lauiss" target='_blank' rel="noreferrer"><button className="btn-action custom-btn"> {translate('GITHUB')} </button></a>
        </div>
        </div>
        </div>

      </div>
    </div>

  )
}

export default Presentation
