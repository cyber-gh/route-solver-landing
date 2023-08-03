import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Route management that just works',
    paragraph: "It is straight-forward to get started with out easy-to-use web application, the opportunities are infinite."
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                  </div>
                <h3 className="mt-0 mb-12">
                  Clients management
                  </h3>
                <p className="m-0">
                 Manage your clients. You can easily add any client by his name and email, name and address. For more advanced workflows you can add the weight, volume, time-window constraints related to that clients' delivery.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/img_1.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                  </div>
                <h3 className="mt-0 mb-12">
                  Drivers management
                  </h3>
                <p className="m-0">
                  Manage your drivers. You can easily add any client by his name and email, name and address. For more advanced workflows you can add the vehicle, volume, time-window constraints related to that clients' delivery.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/img_2.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                  </div>
                <h3 className="mt-0 mb-12">
                  Road planning
                  </h3>
                <p className="m-0">
                  Easily add orders from clients on inline, and optimize their route using one of our state of the art optimization algorithms. For small routes, you can use backtracking, and it will give the best solution, and for more complex routes, you can use the other 3 available options.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/img_3.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                </div>
                <h3 className="mt-0 mb-12">
                  Dispatch Routes
                </h3>
                <p className="m-0">
                  After chosing the best solution, you can easily send a detailed route to your drivers on our mobile application, available for both iOS and Android. Drivers can view the routes along with turn-by-turn directions required to complete the deliveries.
                </p>
              </div>
              <div className={
                classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                )}
                   data-reveal-container=".split-item">
                <Image
                    src={require('./../../assets/images/img_4.png')}
                    alt="Features split 02"
                    width={528}
                    height={396} />
              </div>
            </div>


            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Download our mobile application
                </div>
                <h3 className="mt-0 mb-12">
                  Available on Android
                </h3>
                <p className="m-0">
                  Get our mobile application from the Google Play Store to experience all our features on the go.
                </p>
                <p className="m-0">
                  <a href="https://appdistribution.firebase.dev/i/df0f64a6e50f103a" target="_blank" rel="noopener noreferrer">
                    Download from Google Play Store
                  </a>
                </p>
              </div>
              <div className={
                classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                )}
                   data-reveal-container=".split-item">
                <div style={{width: '450px'}}>
                  <a href="https://appdistribution.firebase.dev/i/df0f64a6e50f103a" target="_blank" rel="noopener noreferrer">
                    <Image
                        src={require('./../../assets/images/android_app_image.png')}
                        alt="Android app"
                        style={{width: '100%', height: 'auto', border: '2px solid white', borderRadius: '10px'}}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Coming Soon on iOS
                </div>
                <h3 className="mt-0 mb-12">
                  Expanding to iOS
                </h3>
                <p className="m-0">
                  We're actively working to bring our app to iOS. Stay tuned for updates!
                </p>
              </div>
              <div className={
                classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                )}
                   data-reveal-container=".split-item">
                <Image
                    src={require('./../../assets/images/ios_app_coming_soon.png')}
                    alt="Coming soon on iOS"
                    width={528}
                    height={396} />
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
