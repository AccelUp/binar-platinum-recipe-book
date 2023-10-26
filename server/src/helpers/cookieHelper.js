function clearRefreshTokenCookie(res) {
  res.clearCookie("refreshToken");
}

export { clearRefreshTokenCookie };
