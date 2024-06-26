import { Scraper } from "@the-convocation/twitter-scraper";
import { configDotenv } from "dotenv";

configDotenv();
const scraper = new Scraper();

(async () => {
  await scraper.login(
    process.env.TWITTER_USERNAME || "",
    process.env.TWITTER_PASSWORD || ""
  );
})();
