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
exports.id = "app/api/system-check/route";
exports.ids = ["app/api/system-check/route"];
exports.modules = {

/***/ "(rsc)/./app/api/system-check/route.ts":
/*!***************************************!*\
  !*** ./app/api/system-check/route.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function GET() {\n    // Check for required files\n    const requiredFiles = [\n        \"app/landing-page.tsx\",\n        \"app/components/nav-menu.tsx\",\n        \"app/components/ai-assistant.tsx\",\n        \"app/components/floating-assistant.tsx\",\n        \"app/api/chat/route.ts\",\n        \"app/globals.css\",\n        \"tailwind.config.js\",\n        \"next.config.js\",\n        \"Dockerfile\",\n        \"docker-compose.yml\",\n        \"deploy.sh\"\n    ];\n    const fileStatus = {};\n    for (const file of requiredFiles){\n        try {\n            const filePath = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), file);\n            const exists = fs__WEBPACK_IMPORTED_MODULE_1___default().existsSync(filePath);\n            fileStatus[file] = exists;\n        } catch (error) {\n            fileStatus[file] = false;\n        }\n    }\n    // Check for required dependencies in package.json\n    let packageJson = {};\n    const dependenciesStatus = {};\n    try {\n        const packageJsonPath = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), \"package.json\");\n        const packageJsonContent = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(packageJsonPath, \"utf8\");\n        packageJson = JSON.parse(packageJsonContent);\n        const requiredDependencies = [\n            \"next\",\n            \"react\",\n            \"react-dom\",\n            \"ai\",\n            \"@ai-sdk/openai\",\n            \"lucide-react\",\n            \"recharts\",\n            \"sonner\",\n            \"tailwindcss\"\n        ];\n        for (const dep of requiredDependencies){\n            dependenciesStatus[dep] = !!(packageJson.dependencies && packageJson.dependencies[dep] || packageJson.devDependencies && packageJson.devDependencies[dep]);\n        }\n    } catch (error) {\n        console.error(\"Error checking package.json:\", error);\n    }\n    // Check for environment variables\n    const requiredEnvVars = [\n        \"NODE_ENV\"\n    ];\n    const envVarStatus = {};\n    for (const envVar of requiredEnvVars){\n        envVarStatus[envVar] = !!process.env[envVar];\n    }\n    const allFilesExist = Object.values(fileStatus).every((status)=>status === true);\n    const allDependenciesExist = Object.values(dependenciesStatus).every((status)=>status === true);\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        status: allFilesExist && allDependenciesExist ? \"ok\" : \"issues_found\",\n        fileStatus,\n        dependenciesStatus,\n        envVarStatus,\n        message: allFilesExist && allDependenciesExist ? \"All required files and dependencies are connected and available.\" : \"Some required files or dependencies are missing. Please check the details.\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3N5c3RlbS1jaGVjay9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEM7QUFDdkI7QUFDSTtBQUVoQixlQUFlRztJQUNwQiwyQkFBMkI7SUFDM0IsTUFBTUMsZ0JBQWdCO1FBQ3BCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7S0FDRDtJQUVELE1BQU1DLGFBQWEsQ0FBQztJQUVwQixLQUFLLE1BQU1DLFFBQVFGLGNBQWU7UUFDaEMsSUFBSTtZQUNGLE1BQU1HLFdBQVdMLGdEQUFTLENBQUNPLFFBQVFDLEdBQUcsSUFBSUo7WUFDMUMsTUFBTUssU0FBU1Ysb0RBQWEsQ0FBQ007WUFDN0JGLFVBQVUsQ0FBQ0MsS0FBSyxHQUFHSztRQUNyQixFQUFFLE9BQU9FLE9BQU87WUFDZFIsVUFBVSxDQUFDQyxLQUFLLEdBQUc7UUFDckI7SUFDRjtJQUVBLGtEQUFrRDtJQUNsRCxJQUFJUSxjQUFjLENBQUM7SUFDbkIsTUFBTUMscUJBQXFCLENBQUM7SUFFNUIsSUFBSTtRQUNGLE1BQU1DLGtCQUFrQmQsZ0RBQVMsQ0FBQ08sUUFBUUMsR0FBRyxJQUFJO1FBQ2pELE1BQU1PLHFCQUFxQmhCLHNEQUFlLENBQUNlLGlCQUFpQjtRQUM1REYsY0FBY0ssS0FBS0MsS0FBSyxDQUFDSDtRQUV6QixNQUFNSSx1QkFBdUI7WUFDM0I7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1NBQ0Q7UUFFRCxLQUFLLE1BQU1DLE9BQU9ELHFCQUFzQjtZQUN0Q04sa0JBQWtCLENBQUNPLElBQUksR0FBRyxDQUFDLENBQ3pCLGFBQWFDLFlBQVksSUFBSVQsWUFBWVMsWUFBWSxDQUFDRCxJQUFJLElBQ3pEUixZQUFZVSxlQUFlLElBQUlWLFlBQVlVLGVBQWUsQ0FBQ0YsSUFBSTtRQUVwRTtJQUNGLEVBQUUsT0FBT1QsT0FBTztRQUNkWSxRQUFRWixLQUFLLENBQUMsZ0NBQWdDQTtJQUNoRDtJQUVBLGtDQUFrQztJQUNsQyxNQUFNYSxrQkFBa0I7UUFDdEI7S0FFRDtJQUVELE1BQU1DLGVBQWUsQ0FBQztJQUN0QixLQUFLLE1BQU1DLFVBQVVGLGdCQUFpQjtRQUNwQ0MsWUFBWSxDQUFDQyxPQUFPLEdBQUcsQ0FBQyxDQUFDbkIsUUFBUW9CLEdBQUcsQ0FBQ0QsT0FBTztJQUM5QztJQUVBLE1BQU1FLGdCQUFnQkMsT0FBT0MsTUFBTSxDQUFDM0IsWUFBWTRCLEtBQUssQ0FBQyxDQUFDQyxTQUFXQSxXQUFXO0lBQzdFLE1BQU1DLHVCQUF1QkosT0FBT0MsTUFBTSxDQUFDakIsb0JBQW9Ca0IsS0FBSyxDQUFDLENBQUNDLFNBQVdBLFdBQVc7SUFFNUYsT0FBT2xDLHFEQUFZQSxDQUFDb0MsSUFBSSxDQUFDO1FBQ3ZCRixRQUFRSixpQkFBaUJLLHVCQUF1QixPQUFPO1FBQ3ZEOUI7UUFDQVU7UUFDQVk7UUFDQVUsU0FDRVAsaUJBQWlCSyx1QkFDYixxRUFDQTtJQUNSO0FBQ0YiLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIva3VjaC1uaGkvYXBwL2FwaS9zeXN0ZW0tY2hlY2svcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCJcbmltcG9ydCBmcyBmcm9tIFwiZnNcIlxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIlxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xuICAvLyBDaGVjayBmb3IgcmVxdWlyZWQgZmlsZXNcbiAgY29uc3QgcmVxdWlyZWRGaWxlcyA9IFtcbiAgICBcImFwcC9sYW5kaW5nLXBhZ2UudHN4XCIsXG4gICAgXCJhcHAvY29tcG9uZW50cy9uYXYtbWVudS50c3hcIixcbiAgICBcImFwcC9jb21wb25lbnRzL2FpLWFzc2lzdGFudC50c3hcIixcbiAgICBcImFwcC9jb21wb25lbnRzL2Zsb2F0aW5nLWFzc2lzdGFudC50c3hcIixcbiAgICBcImFwcC9hcGkvY2hhdC9yb3V0ZS50c1wiLFxuICAgIFwiYXBwL2dsb2JhbHMuY3NzXCIsXG4gICAgXCJ0YWlsd2luZC5jb25maWcuanNcIixcbiAgICBcIm5leHQuY29uZmlnLmpzXCIsXG4gICAgXCJEb2NrZXJmaWxlXCIsXG4gICAgXCJkb2NrZXItY29tcG9zZS55bWxcIixcbiAgICBcImRlcGxveS5zaFwiLFxuICBdXG5cbiAgY29uc3QgZmlsZVN0YXR1cyA9IHt9XG5cbiAgZm9yIChjb25zdCBmaWxlIG9mIHJlcXVpcmVkRmlsZXMpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgZmlsZSlcbiAgICAgIGNvbnN0IGV4aXN0cyA9IGZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpXG4gICAgICBmaWxlU3RhdHVzW2ZpbGVdID0gZXhpc3RzXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGZpbGVTdGF0dXNbZmlsZV0gPSBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIC8vIENoZWNrIGZvciByZXF1aXJlZCBkZXBlbmRlbmNpZXMgaW4gcGFja2FnZS5qc29uXG4gIGxldCBwYWNrYWdlSnNvbiA9IHt9XG4gIGNvbnN0IGRlcGVuZGVuY2llc1N0YXR1cyA9IHt9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBwYWNrYWdlSnNvblBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXCJwYWNrYWdlLmpzb25cIilcbiAgICBjb25zdCBwYWNrYWdlSnNvbkNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMocGFja2FnZUpzb25QYXRoLCBcInV0ZjhcIilcbiAgICBwYWNrYWdlSnNvbiA9IEpTT04ucGFyc2UocGFja2FnZUpzb25Db250ZW50KVxuXG4gICAgY29uc3QgcmVxdWlyZWREZXBlbmRlbmNpZXMgPSBbXG4gICAgICBcIm5leHRcIixcbiAgICAgIFwicmVhY3RcIixcbiAgICAgIFwicmVhY3QtZG9tXCIsXG4gICAgICBcImFpXCIsXG4gICAgICBcIkBhaS1zZGsvb3BlbmFpXCIsXG4gICAgICBcImx1Y2lkZS1yZWFjdFwiLFxuICAgICAgXCJyZWNoYXJ0c1wiLFxuICAgICAgXCJzb25uZXJcIixcbiAgICAgIFwidGFpbHdpbmRjc3NcIixcbiAgICBdXG5cbiAgICBmb3IgKGNvbnN0IGRlcCBvZiByZXF1aXJlZERlcGVuZGVuY2llcykge1xuICAgICAgZGVwZW5kZW5jaWVzU3RhdHVzW2RlcF0gPSAhIShcbiAgICAgICAgKHBhY2thZ2VKc29uLmRlcGVuZGVuY2llcyAmJiBwYWNrYWdlSnNvbi5kZXBlbmRlbmNpZXNbZGVwXSkgfHxcbiAgICAgICAgKHBhY2thZ2VKc29uLmRldkRlcGVuZGVuY2llcyAmJiBwYWNrYWdlSnNvbi5kZXZEZXBlbmRlbmNpZXNbZGVwXSlcbiAgICAgIClcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNoZWNraW5nIHBhY2thZ2UuanNvbjpcIiwgZXJyb3IpXG4gIH1cblxuICAvLyBDaGVjayBmb3IgZW52aXJvbm1lbnQgdmFyaWFibGVzXG4gIGNvbnN0IHJlcXVpcmVkRW52VmFycyA9IFtcbiAgICBcIk5PREVfRU5WXCIsXG4gICAgLy8gQWRkIG90aGVyIHJlcXVpcmVkIGVudiB2YXJzIGhlcmVcbiAgXVxuXG4gIGNvbnN0IGVudlZhclN0YXR1cyA9IHt9XG4gIGZvciAoY29uc3QgZW52VmFyIG9mIHJlcXVpcmVkRW52VmFycykge1xuICAgIGVudlZhclN0YXR1c1tlbnZWYXJdID0gISFwcm9jZXNzLmVudltlbnZWYXJdXG4gIH1cblxuICBjb25zdCBhbGxGaWxlc0V4aXN0ID0gT2JqZWN0LnZhbHVlcyhmaWxlU3RhdHVzKS5ldmVyeSgoc3RhdHVzKSA9PiBzdGF0dXMgPT09IHRydWUpXG4gIGNvbnN0IGFsbERlcGVuZGVuY2llc0V4aXN0ID0gT2JqZWN0LnZhbHVlcyhkZXBlbmRlbmNpZXNTdGF0dXMpLmV2ZXJ5KChzdGF0dXMpID0+IHN0YXR1cyA9PT0gdHJ1ZSlcblxuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgIHN0YXR1czogYWxsRmlsZXNFeGlzdCAmJiBhbGxEZXBlbmRlbmNpZXNFeGlzdCA/IFwib2tcIiA6IFwiaXNzdWVzX2ZvdW5kXCIsXG4gICAgZmlsZVN0YXR1cyxcbiAgICBkZXBlbmRlbmNpZXNTdGF0dXMsXG4gICAgZW52VmFyU3RhdHVzLFxuICAgIG1lc3NhZ2U6XG4gICAgICBhbGxGaWxlc0V4aXN0ICYmIGFsbERlcGVuZGVuY2llc0V4aXN0XG4gICAgICAgID8gXCJBbGwgcmVxdWlyZWQgZmlsZXMgYW5kIGRlcGVuZGVuY2llcyBhcmUgY29ubmVjdGVkIGFuZCBhdmFpbGFibGUuXCJcbiAgICAgICAgOiBcIlNvbWUgcmVxdWlyZWQgZmlsZXMgb3IgZGVwZW5kZW5jaWVzIGFyZSBtaXNzaW5nLiBQbGVhc2UgY2hlY2sgdGhlIGRldGFpbHMuXCIsXG4gIH0pXG59XG5cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJmcyIsInBhdGgiLCJHRVQiLCJyZXF1aXJlZEZpbGVzIiwiZmlsZVN0YXR1cyIsImZpbGUiLCJmaWxlUGF0aCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiZXhpc3RzIiwiZXhpc3RzU3luYyIsImVycm9yIiwicGFja2FnZUpzb24iLCJkZXBlbmRlbmNpZXNTdGF0dXMiLCJwYWNrYWdlSnNvblBhdGgiLCJwYWNrYWdlSnNvbkNvbnRlbnQiLCJyZWFkRmlsZVN5bmMiLCJKU09OIiwicGFyc2UiLCJyZXF1aXJlZERlcGVuZGVuY2llcyIsImRlcCIsImRlcGVuZGVuY2llcyIsImRldkRlcGVuZGVuY2llcyIsImNvbnNvbGUiLCJyZXF1aXJlZEVudlZhcnMiLCJlbnZWYXJTdGF0dXMiLCJlbnZWYXIiLCJlbnYiLCJhbGxGaWxlc0V4aXN0IiwiT2JqZWN0IiwidmFsdWVzIiwiZXZlcnkiLCJzdGF0dXMiLCJhbGxEZXBlbmRlbmNpZXNFeGlzdCIsImpzb24iLCJtZXNzYWdlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/system-check/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsystem-check%2Froute&page=%2Fapi%2Fsystem-check%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsystem-check%2Froute.ts&appDir=%2Fhome%2Fuser%2Fkuch-nhi%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fuser%2Fkuch-nhi&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsystem-check%2Froute&page=%2Fapi%2Fsystem-check%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsystem-check%2Froute.ts&appDir=%2Fhome%2Fuser%2Fkuch-nhi%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fuser%2Fkuch-nhi&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_user_kuch_nhi_app_api_system_check_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/system-check/route.ts */ \"(rsc)/./app/api/system-check/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/system-check/route\",\n        pathname: \"/api/system-check\",\n        filename: \"route\",\n        bundlePath: \"app/api/system-check/route\"\n    },\n    resolvedPagePath: \"/home/user/kuch-nhi/app/api/system-check/route.ts\",\n    nextConfigOutput,\n    userland: _home_user_kuch_nhi_app_api_system_check_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZzeXN0ZW0tY2hlY2slMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnN5c3RlbS1jaGVjayUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnN5c3RlbS1jaGVjayUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGdXNlciUyRmt1Y2gtbmhpJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZob21lJTJGdXNlciUyRmt1Y2gtbmhpJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNDO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvaG9tZS91c2VyL2t1Y2gtbmhpL2FwcC9hcGkvc3lzdGVtLWNoZWNrL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9zeXN0ZW0tY2hlY2svcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9zeXN0ZW0tY2hlY2tcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3N5c3RlbS1jaGVjay9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9ob21lL3VzZXIva3VjaC1uaGkvYXBwL2FwaS9zeXN0ZW0tY2hlY2svcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsystem-check%2Froute&page=%2Fapi%2Fsystem-check%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsystem-check%2Froute.ts&appDir=%2Fhome%2Fuser%2Fkuch-nhi%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fuser%2Fkuch-nhi&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

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

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

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

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@opentelemetry"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsystem-check%2Froute&page=%2Fapi%2Fsystem-check%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsystem-check%2Froute.ts&appDir=%2Fhome%2Fuser%2Fkuch-nhi%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fuser%2Fkuch-nhi&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();