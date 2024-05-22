import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  static get url() {
    return "/";
  }



  static get MakeAppointmentButton() {
    return cy.get("#btn-make-appointment");
  }

  static get UsernameInput() {
    return cy.get("#txt-username");
  }

  static get PasswordInput() {
    return cy.get("#txt-password");
  }

  static get DateInput() {
    return cy.get("#txt_visit_date");
  }

  static get CommentInput() {
    return cy.get("#txt_comment");
  }

  static get LoginButton() {
    return cy.get("#btn-login");
  }

  static get BookAppointButton() {
    return cy.get("#btn-book-appointment");
  }

  static get FacilitySelect() {
    return cy.get("#combo_facility");
  }

  static get HospitReadmissCheckbox() {
    return cy.get("#chk_hospotal_readmission");
  }

  static get MedicaidRadio() {
    return cy.get("#radio_program_medicaid");
  }

  static get Day30Item() {
    return cy.get(".day").contains("30");
  }

  static get Body() {
    return cy.get("body");
  }
  
  static get FacilityResultText() {
    return cy.get("#facility");
  }
  static get HospReadmissResultText() {
    return cy.get("#hospital_readmission");
  }
  static get HealthProgramResultText() {
    return cy.get("#program");
  }
  static get DateResultText() {
    return cy.get("#visit_date");
  }
  static get CommentResultText() {
    return cy.get("#comment");
  }

  static get BurgerButton() {
    return cy.get("#menu-toggle");
  }

  static get SideBar() {
    return cy.get("#sidebar-wrapper");
  }

  static get HistoryButton() {
    return cy.get("a").contains("History");
  }

  static get HistoryContainer() {
    return cy.get(".col-sm-12");
  }
}
