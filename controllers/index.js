displayName = (req, res, next) => {
    const data =
      'Dianery Marin';
    res.status(200).send(data);
  };
  
  module.exports = {
    displayName
  };