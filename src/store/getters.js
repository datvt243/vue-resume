export default {
  getFilePDF: state => state.filePDF,
  getGithub: state => state.github,
  getMenuPrimary: state => state.menuPrimary,
  // -------
  getPersonInfo: state => state.person.info,
  getPersonContact: state => state.person.contact,
  getPersonalSkills: state => state.person.skills,
  // -------
  getFrontendSkills: state => state.frontend.skills,
  getFrontendTagsSkills: state => state.frontend.tags,
  // -------
  getDesignSkills: state => state.design.skills,
  getDesignTagsSkills: state => state.design.tags,
  // -------
  getExperience: state => state.experience,
  getEducation: state => state.education,
  // -------
  getPortfolioFreelancer: state => state.company.freelancer,
  getPortfolioVietry: state => state.company.vietry,
  getPortfolioFastcoding: state => state.company.fastcoding,
  // -------
  getPortfolioVue: state => state.portfolio.vue,
  getPortfolioNodejs: state => state.portfolio.nodejs,
  getPortfolioTypescript: state => state.portfolio.typescript
};
