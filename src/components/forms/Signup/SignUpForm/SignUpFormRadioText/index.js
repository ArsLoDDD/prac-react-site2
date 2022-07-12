import React from 'react';
import styles from "./SignUpFormRadioText.module.scss";
const SignUpFormRadioText = () => {
    return (
             <div className={styles.join}>
                <div className={styles.joinItems}>
                  <input className={styles.joinRadio}  name="join" type="radio" />
                  <div className={styles.joinInerItems}>
                    <h3>Join As a Buyer</h3>
                    <span>
                      I am looking for a Name, Logo or Tagline for my business,
                      brand or product.
                    </span>
                  </div>
                </div>
                <div className={styles.joinItems}>
                  <input className={styles.joinRadio} name="join" type="radio" />
                  <div className={styles.joinInerItems}>
                    <h3>Join As a Creative or Marketplace Seller</h3>
                    <span>
                      I plan to submit name ideas, Logo designs or sell names in
                      Domain Marketplace.
                    </span>
                  </div>
                </div>
              </div>
        
    );
}

export default SignUpFormRadioText;
