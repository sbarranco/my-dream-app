export interface MenuItem {
  id: number;
  label: string;
  path: string;
  authRequired: boolean;
  children?: MenuItem[];
}
