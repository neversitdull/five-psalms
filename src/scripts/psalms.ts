// src/scripts/psalms.ts
import { STATIC_PSALMS, getRandomPsalms } from "../constants/psalms"

const TIMEZONE = "America/Los_Angeles"

export function initPsalms() {
  const container = document.getElementById("psalm-container")
  if (!container) return

  // Get current date in LA timezone
  const now = new Date()
  const dayOfMonth = new Date(
    now.toLocaleString("en-US", { timeZone: TIMEZONE })
  ).getDate()

  // Update date display
  const dateDisplay = document.getElementById("date-display")
  if (dateDisplay) {
    dateDisplay.textContent = new Intl.DateTimeFormat("en-US", {
      timeZone: TIMEZONE,
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(now)
  }

  // Get today's psalms
  const todaysPsalms =
    dayOfMonth === 31 ? getRandomPsalms() : STATIC_PSALMS[dayOfMonth - 1]

  // Update psalm links
  container
    .querySelectorAll<HTMLAnchorElement>("[data-psalm-index]")
    .forEach((link) => {
      const index = +(link.dataset.psalmIndex ?? 0)
      const psalmNumber = todaysPsalms[index]
      link.textContent = String(psalmNumber)
      link.href = `https://www.bible.com/bible/111/PSA.${psalmNumber}`
    })
}
