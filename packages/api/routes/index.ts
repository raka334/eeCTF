import { Hono } from "hono";

import { challengeRouter } from "./challenges.routes";
import { statsRouter } from "./stats.routes";
import { teamRouter } from "./teams.routes";
import { userRoutes } from "./users.routes";
import { newsRouter } from "./news.routes";

export const routes = new Hono();

routes.get("/", ctx => ctx.text("Shushhhhhh! Dont look here. ;)"));

routes.route("/challenge", challengeRouter);
routes.route("/stats", statsRouter);
routes.route("/team", teamRouter);
routes.route("/user", userRoutes);
routes.route("/news", newsRouter);

routes.get("/health", ctx => ctx.text("OK", 200));
routes.get("/flag.txt", ctx => ctx.text("flag{th1s_1s_n0t_th3_fl4g}", 418));
routes.get("*", ctx => ctx.text("Are you lost, baby gurl?", 404));