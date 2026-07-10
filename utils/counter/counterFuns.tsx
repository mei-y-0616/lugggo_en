import { prefCodeList } from "@/data/pref_code";
import { parsePhoneNumberWithError } from "libphonenumber-js";
import type { counter } from "@prisma/client";

export function getPrefName(code: string) {
  const c = code.padStart(6, "0");
  const name = prefCodeList[c];
  if (name) {
    return name;
  } else {
    return "";
  }
}

export function getParsePhone(phone: string | null) {
  if (phone !== null) {
    try {
      const formatedPhone = parsePhoneNumberWithError(phone, {
        defaultCountry: "JP",
      });
      return formatedPhone.formatNational();
    } catch (error) {
      return phone;
    }
  } else {
    return "No Data";
  }
}

export function parseTime(time: string) {
  const parseTime = time.padEnd(3, "0");
  const timeString = parseTime.slice(-4, -2) + ":" + parseTime.slice(-2);
  return timeString;
}

export function judgeRunTime({
  open,
  close,
  is_holiday,
}: {
  open: string | null;
  close: string | null;
  is_holiday: number | null;
}) {
  // const o = open?.padEnd(3, "0");
  // const c = close?.padEnd(3, "0");
  if (is_holiday === 1) {
    return "Closed";
  } else if (open !== null && close !== null) {
    return parseTime(open) + "～" + parseTime(close);
  } else if (open == null && close != null) {
    return "---" + "～" + parseTime(close);
  } else if (open != null && close == null) {
    parseTime(open) + "～" + "---";
  } else {
    return "---";
  }
  return "---";
}

export function getLanguage(c: counter) {
  const language = [];
  if (c.lang_en === 1) {
    language.push("English");
  }
  if (c.lang_zh_cn === 1) {
    language.push("简体中文");
  }
  if (c.lang_zh_tw === 1) {
    language.push("繁體中文");
  }
  if (c.lang_ko === 1) {
    language.push("한국어");
  }
  if (c.lang_th === 1) {
    language.push("ไทย");
  }
  const languageStr = language.join("/");
  if (c.lang_others_en) {
    languageStr + c.lang_others_en;
  }
  if (languageStr.length > 0) {
    return languageStr;
  } else {
    return "No Data";
  }
}

export function getPrice({
  fixed,
  max,
  min,
}: {
  fixed: string | null;
  max: string | null;
  min: string | null;
}) {
  if (fixed) {
    return fixed
  } else {
    return (min ?? "---")+"～"+(max ?? "---")
  }
}
