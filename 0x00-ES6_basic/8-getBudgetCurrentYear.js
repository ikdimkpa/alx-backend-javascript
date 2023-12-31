function getCurrentYear() {
	  const date = new Date();
	  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
	  return {
		  budget[`income-${setCurrentYear()}`]: income,
		  budget[`gdp-${getCurrentYear()}`]: gdp,
		  budget[`capita-${getCurrentYear()}`]: capita,
	  };
}
