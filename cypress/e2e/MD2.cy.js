import { HomePage } from "../pageObjects/HomePage";


describe('demoqa MD1', () => {

  context("Selectable", () => {

    beforeEach(() => {
      HomePage.visit();

      // Click - Make Appointment
      HomePage.MakeAppointmentButton.click();

      // Set username and password fields with the demo account credentials
      HomePage.UsernameInput.type("John Doe");
      HomePage.PasswordInput.type("ThisIsNotAPassword");

      // Click - Login
      HomePage.LoginButton.click();
    });

    it('Scenario 1', () => {
      // Set the following values:
      // 1. Facility - Seoul CURA Healthcare Center
      HomePage.FacilitySelect.select("Seoul CURA Healthcare Center")

      // 2. Check - Apply for hospital readmission
      HomePage.HospitReadmissCheckbox.check();

      // 3. Select - Medicaid
      HomePage.MedicaidRadio.check();

      // 4. Set Date value by using the widget - 30
      HomePage.DateInput.click();
      HomePage.Day30Item.click();
      HomePage.Body.click(0,0);
      
      // 5. Set comment - CURA Healthcare Service
      HomePage.CommentInput.type("CURA Healthcare Service");

      // 6. Click - Book Appointment
      HomePage.BookAppointButton.click();

      // Validate that previously set values are correct
      HomePage.FacilityResultText.should(
        "contain",
        "Seoul CURA Healthcare Center"
        );
      HomePage.HospReadmissResultText.should(
        "contain",
        "Yes"
        );
      HomePage.HealthProgramResultText.should(
        "contain",
        "Medicaid"
        );
      HomePage.DateResultText.should(
        "contain",
        "30/"
        );
      HomePage.CommentResultText.should(
        "contain",
        "CURA Healthcare Service"
        );

    });

    it('Scenario 2', () => {
      // Click - Menu/Stack/Burger icon
      HomePage.BurgerButton.click();

      // Validate that the sidebar is active
      HomePage.SideBar.should(
        "have.class",
        "active"
      );

      // Click - History
      HomePage.HistoryButton.click();

      // Validate that - No appointment - is visible
      HomePage.HistoryContainer.should(
        "contain",
        "No appointment."
      );
      
    });

  });

})