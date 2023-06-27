var myFavorites = [];

const postFav = (req, res) => {
  myFavorites.push(req.body);
  return res.json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  const filtered = myFavorites.filter(
    (favorite) => Number(favorite.id) !== Number(id)
  );
  myFavorites = filtered;
  return res.json(myFavorites);
};

module.exports = {
  postFav,
  deleteFav,
};
