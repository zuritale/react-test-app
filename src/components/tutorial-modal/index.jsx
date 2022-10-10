import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useIntl } from 'react-intl';

import { getShowTutorialSelector } from '../../store/reducers/app';
import { completeTutorial } from '../../store/actions/app';
import { getLocaleSelector } from '../../store/reducers/locales';
import messages from '../../utils/constants/locales/messages';
import { tutorialSections } from '../../utils/constants/tutorial';

const TutorialModal = () => {
  const t = useIntl();
  const dispatch = useDispatch()
  const showTutorial = useSelector(getShowTutorialSelector);
  const lang = useSelector(getLocaleSelector);
  const [step, setStep] = useState(0);

  const nextStep = () => setStep(step + 1);

  const complete = () => dispatch(completeTutorial());

  const onClose = () => setStep(0);

  useEffect(()=> {
    if (showTutorial) {
      const modalToggle = document.getElementById('tutorial-modal-toggle');
      modalToggle.click();
      complete();
    }
  },[showTutorial]);

  return (
    <div className="modal" id="tutorial-modal" tabIndex="-1" aria-labelledby="tutorial-modalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="tutorial-modalLabel">{t.formatMessage(messages.tutorialTitle)}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="d-flex flex-column align-items-center">
              <img
                src={`images/tutorial-${tutorialSections[step].image}-${lang}.png`}
                alt="tutorial section banner"
                className="tutorial-image my-3"
              />
              {tutorialSections[step].paragraphs.map((paragraph, index) => (
                <p key={`tutorial-section-paragraph-${index}-${Math.random()}`} className="px-4" >
                  {t.formatMessage(messages[paragraph])}
                </p>
              ))}
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-primary me-auto"
              data-bs-dismiss="modal"
              onClick={onClose}
            >
              {t.formatMessage(messages.close)}
            </button>
            {(step + 1) < tutorialSections.length && (
              <button
                type="button"
                className="btn btn-primary"
                onClick={nextStep}
              >
                {t.formatMessage(messages.next)}
              </button>
            )}
            {(step + 1) === tutorialSections.length && (
              <button
                type="button"
                className="btn btn-primary"
                onClick={onClose}
                data-bs-dismiss="modal"
              >
                {t.formatMessage(messages.done)}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TutorialModal;
