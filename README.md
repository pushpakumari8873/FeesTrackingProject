# Fees Collection Tracker App 💰

A professional-grade **Fees Tracking System** built with **Angular 20**. This application is a versatile solution for any domain that requires tracking payments, such as Educational Institutes, Shops providing products on EMI, Gym memberships, and more. 

It helps you efficiently track the amount you are expected to receive and monitor pending payments, turning your tracking process into a streamlined product.

---

## ✨ Key Functionality

- **👤 Candidate Enrollment**: Seamlessly register new students or clients into the system.
- **📊 Payment Tracking**: Monitor fee collections, EMIs, and pending balances in real-time.
- **📈 Dashboard Analytics**: 
  - Instant overview of Total Students, Total Fees Received, and Pending Fees.
  - Interactive summary cards with modern glassmorphic design.
- **🎨 Premium UI/UX**:
  - Fully responsive layout for all devices.
  - Custom typography (Outfit) and smooth micro-animations.

  

---

## � API Integration

The project is designed to integrate with the **FreeProjectAPI** backend for robust data management.

- **Base URL**: `https://freeprojectapi.com/api.html`
- **API Key**: `FeesTracking`
- **Key Endpoints**:
  - `GET /GetDashboardStats`: Fetch summary stats for the dashboard cards.
  - `GET /GetAllEnrollments`: Retrieve the complete list of enrolled candidates.
  - `POST /AddEnrollment`: Submit new candidate data to the database.
  - `DELETE /DeleteEnrollmentByEnrollmentId?id={id}`: Remove a specific record.

---

## 🛠️ Tech Stack

- **Core Framework**: [Angular 20](https://angular.io/) (Standalone Components)
- **Styling**: Vanilla CSS3 (Custom Design System)
- **Icons**: [Bootstrap Icons](https://icons.getbootstrap.com/)
- **Typography**: [Google Fonts (Outfit)](https://fonts.google.com/specimen/Outfit)

---

## 📂 Project Structure

```text
src/
├── app/
│   ├── fees-tracking/           # Main Feature Module
│   │   ├── fees-tracking.ts     # Component Logic (Standalone)
│   │   ├── fees-tracking.html   # Premium UI Structure
│   │   └── fees-tracking.css    # Custom Modern Styling
│   ├── app.routes.ts            # Routing Configuration
│   └── app.config.ts            # Application Providers
├── assets/                      # Static Assets & Images
└── index.html                   # Entry point with Google Fonts & CDNs
```

---

