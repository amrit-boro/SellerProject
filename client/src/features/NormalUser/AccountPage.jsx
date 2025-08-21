function AccountPage() {
  return (
    <div className="account-container">
      {/* Sidebar */}
      <aside className="account_sidebar">
        <div className="profile-header">
          <div className="account_avatar">A</div>
          <div>
            <p className="hello">Hello,</p>
            <h3 className="name">Amrit Boro</h3>
          </div>
        </div>

        <div className="account_sidebar-section">
          <h4>MY ORDERS</h4>
        </div>

        <div className="account_sidebar-section">
          <h4>ACCOUNT SETTINGS</h4>
          <ul>
            <li className="active">Profile Information</li>
            <li>Manage Addresses</li>
          </ul>
        </div>

        <div className="account_sidebar-section">
          <h4>PAYMENTS</h4>
          <ul>
            <li>
              Gift Cards <span className="green">₹0</span>
            </li>
            <li>Saved UPI</li>
          </ul>
        </div>

        <div className="account_sidebar-section">
          <h4>MY STUFF</h4>
          <ul>
            <li>My Coupons</li>

            <li>All Notifications</li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="content">
        <div className="account_section">
          <h2>
            Personal Information <span className="edit">Edit</span>
          </h2>
          <div className="form-row">
            <input type="text" value="Amrit" readOnly />
            <input type="text" value="Boro" readOnly />
          </div>
          <div className="form-row">
            <label>Your Gender</label>
            <input type="radio" name="gender" /> Male
            <input type="radio" name="gender" /> Female
          </div>
        </div>

        <div className="account_section">
          <h2>
            Email Address <span className="edit">Edit</span>
          </h2>
          <input type="text" readOnly />
        </div>

        <div className="account_section">
          <h2>
            Mobile Number <span className="edit">Edit</span>
          </h2>
          <input type="text" value="+918837014137" readOnly />
        </div>

        <div className="account_section faq">
          <h2>FAQs</h2>
          <p>
            <strong>
              What happens when I update my email address (or mobile number)?
            </strong>
            <br />
            Your login email id (or mobile number) changes, likewise. You’ll
            receive all your account related communication on your updated email
            address (or mobile number).
          </p>

          <p>
            <strong>
              When will my Flipkart account be updated with the new email
              address (or mobile number)?
            </strong>
            <br />
            It happens as soon as you confirm the verification code sent to your
            email (or mobile) and save the changes.
          </p>
        </div>
      </main>
    </div>
  );
}

export default AccountPage;
