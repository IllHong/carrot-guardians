// 앱인토스 SDK를 일반 <script> 게임 코드에서 쓸 수 있게 window.AIT로 노출
import { loadFullScreenAd, showFullScreenAd, graniteEvent, Game, closeView, getOperationalEnvironment } from "@apps-in-toss/web-framework";
window.AIT = { loadFullScreenAd, showFullScreenAd, graniteEvent, Game, closeView, getOperationalEnvironment };
