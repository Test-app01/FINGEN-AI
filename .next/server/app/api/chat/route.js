/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/chat/route";
exports.ids = ["app/api/chat/route"];
exports.modules = {

/***/ "(rsc)/./app/api/chat/route.ts":
/*!*******************************!*\
  !*** ./app/api/chat/route.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   maxDuration: () => (/* binding */ maxDuration)\n/* harmony export */ });\n/* harmony import */ var _ai_sdk_openai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ai-sdk/openai */ \"(rsc)/./node_modules/@ai-sdk/openai/dist/index.mjs\");\n/* harmony import */ var ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ai */ \"(rsc)/./node_modules/ai/dist/index.mjs\");\n\n\nconst maxDuration = 30;\nasync function POST(req) {\n    try {\n        // Check if OpenAI API key is configured\n        if (!process.env.OPENAI_API_KEY) {\n            return new Response(JSON.stringify({\n                error: \"OpenAI API key is not configured. Please set the OPENAI_API_KEY environment variable.\"\n            }), {\n                status: 500,\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n        }\n        const { messages } = await req.json();\n        // Add system message if not present\n        const finalMessages = messages.some((m)=>m.role === \"system\") ? messages : [\n            {\n                role: \"system\",\n                content: \"You are a helpful AI financial assistant called FinAI. Provide accurate, educational information about investing, financial planning, and market trends. Keep responses concise and focused on financial topics. Do not provide specific investment advice or recommendations for individual securities.\"\n            },\n            ...messages\n        ];\n        const result = (0,ai__WEBPACK_IMPORTED_MODULE_0__.streamText)({\n            model: (0,_ai_sdk_openai__WEBPACK_IMPORTED_MODULE_1__.openai)(\"gpt-3.5-turbo\"),\n            messages: finalMessages,\n            maxTokens: 1000\n        });\n        return result.toDataStreamResponse();\n    } catch (error) {\n        console.error(\"Error in chat API:\", error);\n        // Determine if it's a rate limit error\n        const isRateLimit = error.message?.includes(\"rate limit\") || error.message?.includes(\"429\");\n        return new Response(JSON.stringify({\n            error: isRateLimit ? \"Rate limit exceeded. Please try again in a moment.\" : \"Failed to process chat request. Please try again later.\"\n        }), {\n            status: isRateLimit ? 429 : 500,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NoYXQvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF1QztBQUNSO0FBRXhCLE1BQU1FLGNBQWMsR0FBRTtBQUV0QixlQUFlQyxLQUFLQyxHQUFZO0lBQ3JDLElBQUk7UUFDRix3Q0FBd0M7UUFDeEMsSUFBSSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLGNBQWMsRUFBRTtZQUMvQixPQUFPLElBQUlDLFNBQ1RDLEtBQUtDLFNBQVMsQ0FBQztnQkFDYkMsT0FBTztZQUNULElBQ0E7Z0JBQUVDLFFBQVE7Z0JBQUtDLFNBQVM7b0JBQUUsZ0JBQWdCO2dCQUFtQjtZQUFFO1FBRW5FO1FBRUEsTUFBTSxFQUFFQyxRQUFRLEVBQUUsR0FBRyxNQUFNVixJQUFJVyxJQUFJO1FBRW5DLG9DQUFvQztRQUNwQyxNQUFNQyxnQkFBZ0JGLFNBQVNHLElBQUksQ0FBQyxDQUFDQyxJQUFXQSxFQUFFQyxJQUFJLEtBQUssWUFDdkRMLFdBQ0E7WUFDRTtnQkFDRUssTUFBTTtnQkFDTkMsU0FDRTtZQUNKO2VBQ0dOO1NBQ0o7UUFFTCxNQUFNTyxTQUFTcEIsOENBQVVBLENBQUM7WUFDeEJxQixPQUFPdEIsc0RBQU1BLENBQUM7WUFDZGMsVUFBVUU7WUFDVk8sV0FBVztRQUNiO1FBRUEsT0FBT0YsT0FBT0csb0JBQW9CO0lBQ3BDLEVBQUUsT0FBT2IsT0FBTztRQUNkYyxRQUFRZCxLQUFLLENBQUMsc0JBQXNCQTtRQUVwQyx1Q0FBdUM7UUFDdkMsTUFBTWUsY0FBY2YsTUFBTWdCLE9BQU8sRUFBRUMsU0FBUyxpQkFBaUJqQixNQUFNZ0IsT0FBTyxFQUFFQyxTQUFTO1FBRXJGLE9BQU8sSUFBSXBCLFNBQ1RDLEtBQUtDLFNBQVMsQ0FBQztZQUNiQyxPQUFPZSxjQUNILHVEQUNBO1FBQ04sSUFDQTtZQUNFZCxRQUFRYyxjQUFjLE1BQU07WUFDNUJiLFNBQVM7Z0JBQUUsZ0JBQWdCO1lBQW1CO1FBQ2hEO0lBRUo7QUFDRiIsInNvdXJjZXMiOlsiL2hvbWUvdXNlci9rdWNoLW5oaS9hcHAvYXBpL2NoYXQvcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb3BlbmFpIH0gZnJvbSBcIkBhaS1zZGsvb3BlbmFpXCJcbmltcG9ydCB7IHN0cmVhbVRleHQgfSBmcm9tIFwiYWlcIlxuXG5leHBvcnQgY29uc3QgbWF4RHVyYXRpb24gPSAzMFxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICAvLyBDaGVjayBpZiBPcGVuQUkgQVBJIGtleSBpcyBjb25maWd1cmVkXG4gICAgaWYgKCFwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWSkge1xuICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGVycm9yOiBcIk9wZW5BSSBBUEkga2V5IGlzIG5vdCBjb25maWd1cmVkLiBQbGVhc2Ugc2V0IHRoZSBPUEVOQUlfQVBJX0tFWSBlbnZpcm9ubWVudCB2YXJpYWJsZS5cIixcbiAgICAgICAgfSksXG4gICAgICAgIHsgc3RhdHVzOiA1MDAsIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSB9LFxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IGF3YWl0IHJlcS5qc29uKClcblxuICAgIC8vIEFkZCBzeXN0ZW0gbWVzc2FnZSBpZiBub3QgcHJlc2VudFxuICAgIGNvbnN0IGZpbmFsTWVzc2FnZXMgPSBtZXNzYWdlcy5zb21lKChtOiBhbnkpID0+IG0ucm9sZSA9PT0gXCJzeXN0ZW1cIilcbiAgICAgID8gbWVzc2FnZXNcbiAgICAgIDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJvbGU6IFwic3lzdGVtXCIsXG4gICAgICAgICAgICBjb250ZW50OlxuICAgICAgICAgICAgICBcIllvdSBhcmUgYSBoZWxwZnVsIEFJIGZpbmFuY2lhbCBhc3Npc3RhbnQgY2FsbGVkIEZpbkFJLiBQcm92aWRlIGFjY3VyYXRlLCBlZHVjYXRpb25hbCBpbmZvcm1hdGlvbiBhYm91dCBpbnZlc3RpbmcsIGZpbmFuY2lhbCBwbGFubmluZywgYW5kIG1hcmtldCB0cmVuZHMuIEtlZXAgcmVzcG9uc2VzIGNvbmNpc2UgYW5kIGZvY3VzZWQgb24gZmluYW5jaWFsIHRvcGljcy4gRG8gbm90IHByb3ZpZGUgc3BlY2lmaWMgaW52ZXN0bWVudCBhZHZpY2Ugb3IgcmVjb21tZW5kYXRpb25zIGZvciBpbmRpdmlkdWFsIHNlY3VyaXRpZXMuXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAuLi5tZXNzYWdlcyxcbiAgICAgICAgXVxuXG4gICAgY29uc3QgcmVzdWx0ID0gc3RyZWFtVGV4dCh7XG4gICAgICBtb2RlbDogb3BlbmFpKFwiZ3B0LTMuNS10dXJib1wiKSxcbiAgICAgIG1lc3NhZ2VzOiBmaW5hbE1lc3NhZ2VzLFxuICAgICAgbWF4VG9rZW5zOiAxMDAwLFxuICAgIH0pXG5cbiAgICByZXR1cm4gcmVzdWx0LnRvRGF0YVN0cmVhbVJlc3BvbnNlKClcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gY2hhdCBBUEk6XCIsIGVycm9yKVxuXG4gICAgLy8gRGV0ZXJtaW5lIGlmIGl0J3MgYSByYXRlIGxpbWl0IGVycm9yXG4gICAgY29uc3QgaXNSYXRlTGltaXQgPSBlcnJvci5tZXNzYWdlPy5pbmNsdWRlcyhcInJhdGUgbGltaXRcIikgfHwgZXJyb3IubWVzc2FnZT8uaW5jbHVkZXMoXCI0MjlcIilcblxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGVycm9yOiBpc1JhdGVMaW1pdFxuICAgICAgICAgID8gXCJSYXRlIGxpbWl0IGV4Y2VlZGVkLiBQbGVhc2UgdHJ5IGFnYWluIGluIGEgbW9tZW50LlwiXG4gICAgICAgICAgOiBcIkZhaWxlZCB0byBwcm9jZXNzIGNoYXQgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICAgIH0pLFxuICAgICAge1xuICAgICAgICBzdGF0dXM6IGlzUmF0ZUxpbWl0ID8gNDI5IDogNTAwLFxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICB9LFxuICAgIClcbiAgfVxufVxuXG4iXSwibmFtZXMiOlsib3BlbmFpIiwic3RyZWFtVGV4dCIsIm1heER1cmF0aW9uIiwiUE9TVCIsInJlcSIsInByb2Nlc3MiLCJlbnYiLCJPUEVOQUlfQVBJX0tFWSIsIlJlc3BvbnNlIiwiSlNPTiIsInN0cmluZ2lmeSIsImVycm9yIiwic3RhdHVzIiwiaGVhZGVycyIsIm1lc3NhZ2VzIiwianNvbiIsImZpbmFsTWVzc2FnZXMiLCJzb21lIiwibSIsInJvbGUiLCJjb250ZW50IiwicmVzdWx0IiwibW9kZWwiLCJtYXhUb2tlbnMiLCJ0b0RhdGFTdHJlYW1SZXNwb25zZSIsImNvbnNvbGUiLCJpc1JhdGVMaW1pdCIsIm1lc3NhZ2UiLCJpbmNsdWRlcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/chat/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/ai/dist lazy recursive ^.*child_process$":
/*!******************************************************************************!*\
  !*** ./node_modules/ai/dist/ lazy ^.*child_process$ strict namespace object ***!
  \******************************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "(rsc)/./node_modules/ai/dist lazy recursive ^.*child_process$";
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=%2Fhome%2Fuser%2Fkuch-nhi%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fuser%2Fkuch-nhi&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=%2Fhome%2Fuser%2Fkuch-nhi%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fuser%2Fkuch-nhi&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_user_kuch_nhi_app_api_chat_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/chat/route.ts */ \"(rsc)/./app/api/chat/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/chat/route\",\n        pathname: \"/api/chat\",\n        filename: \"route\",\n        bundlePath: \"app/api/chat/route\"\n    },\n    resolvedPagePath: \"/home/user/kuch-nhi/app/api/chat/route.ts\",\n    nextConfigOutput,\n    userland: _home_user_kuch_nhi_app_api_chat_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZjaGF0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZjaGF0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY2hhdCUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGdXNlciUyRmt1Y2gtbmhpJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZob21lJTJGdXNlciUyRmt1Y2gtbmhpJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNQO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvaG9tZS91c2VyL2t1Y2gtbmhpL2FwcC9hcGkvY2hhdC9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvY2hhdC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2NoYXRcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2NoYXQvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvaG9tZS91c2VyL2t1Y2gtbmhpL2FwcC9hcGkvY2hhdC9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=%2Fhome%2Fuser%2Fkuch-nhi%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fuser%2Fkuch-nhi&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@opentelemetry","vendor-chunks/zod-to-json-schema","vendor-chunks/@ai-sdk","vendor-chunks/eventsource-parser","vendor-chunks/zod","vendor-chunks/nanoid","vendor-chunks/ai","vendor-chunks/secure-json-parse"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=%2Fhome%2Fuser%2Fkuch-nhi%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fuser%2Fkuch-nhi&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();