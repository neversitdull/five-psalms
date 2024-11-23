// src/scripts/psalms.ts
import { STATIC_PSALMS, getRandomPsalms } from "../constants/psalms";

export function initPsalms() {
  // Get current date in LA timezone
  const today = new Date().toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
  });
  const date = new Date(today);

  // Format full date
  const fullDate = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);

  // Get day of month
  const dayOfMonth = date.getDate();

  // Get today's psalms
  const todaysPsalms =
    dayOfMonth === 31 ? getRandomPsalms() : STATIC_PSALMS[dayOfMonth - 1];

  const container = document.getElementById("psalm-container");
  if (container) {
    // Update date
    document.getElementById("date-display")!.textContent = fullDate;

    // Update psalm numbers
    const numbers =
      container.querySelectorAll<HTMLElement>("[data-psalm-index]");
    numbers.forEach((element) => {
      const index = parseInt(element.dataset.psalmIndex ?? "0");
      element.textContent = todaysPsalms[index].toString();
    });
  }
}