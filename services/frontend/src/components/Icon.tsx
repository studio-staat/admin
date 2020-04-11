export function Icon({ type = null }: any) {
  if (!type) return null;
  return <i className={`fas fa-${type}`}></i>;
}

export function LogoutIcon() {
  return <Icon type="sign-out-alt" />;
}

export function SettingsIcon() {
  return <Icon type="cogs" />;
}

export function UserSettingsIcon() {
  return <Icon type="user-cog" />;
}
