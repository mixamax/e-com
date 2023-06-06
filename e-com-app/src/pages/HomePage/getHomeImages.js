export const getHomeImages = () => {
  const images = importAll(
    require.context(
      "../../images/homepageimg",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  return images;
};

function importAll(r) {
  return r.keys().map(r);
}
