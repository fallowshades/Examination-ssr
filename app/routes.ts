import { type RouteConfig, type RouteConfigEntry, index,layout,route,prefix } from "@react-router/dev/routes";

// non absolute path, .tsx :id
//spread the returned array for prefix
//unique id
export default [
  index('routes/home.tsx', { id: 'routes/__main-index' }),

  ...prefix('dashboard', [
    layout('routes/_layout.tsx', [
      index('routes/home.tsx', { id: 'routes/__main/home-index' }),
      route('/', 'routes/dashboard.tsx', [
        index('routes/home.tsx'),
        route(':dates', 'routes/dashboard.dates.tsx', [
          route(':id', 'views/CheckboxWaterFall.tsx'),
        ]),
      ]),
    ]),
  ]),

  route('*', 'routes/_errors/404.tsx'),
] satisfies RouteConfig
