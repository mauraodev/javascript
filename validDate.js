const data = {
  name: "Teste 8",
  workPlan: [
    {
      end: "18:00",
      start: "08:00",
      weekDays: ["sun", "mon"],
    },
    {
      end: "18:00",
      start: "08:00",
      weekDays: ["fri", ""],
    },
  ],
};

const weekDaysValid = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

const dayIsValid = (weekDays) => {
  const resultWeek = weekDays.filter((day) => {
    if (weekDaysValid.includes(day)) {
      return day;
    }
  });

  if (resultWeek.length === weekDays.length) {
    return true;
  }

  return false;
};

const workPlanIsValid = (workPlan) => {
    const valuesEmpty = workPlan.every((v) => v?.weekDays && v?.start && v?.end)

    if (!valuesEmpty) {
        return false
    }

    return workPlan.map((item) => {
      if (item.weekDays.length) {
        return dayIsValid(item.weekDays);
      }
    });
}

console.log(workPlanIsValid(data.workPlan))
