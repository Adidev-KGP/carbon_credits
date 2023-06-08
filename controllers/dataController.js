const path = require('path');
const fs = require('fs');

// Controller: GET /data
exports.getData = (req, res) => {
  const filePath = path.join(__dirname, '../data/data.json');
  
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }

    const jsonData = JSON.parse(data);
    res.json(jsonData);
  });
};


// function getDataById(req, res) {
//   const { id } = req.params;

//   fs.readFile(dataFilePath, 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).json({ error: 'Failed to retrieve data' });
//     }

//     const jsonData = JSON.parse(data);
//     const dataItem = jsonData.find(item => item.id === id);

//     if (!dataItem) {
//       return res.status(404).json({ error: 'Data not found' });
//     }

//     return res.json(dataItem);
//   });
// }

// function createData(req, res) {
//   const { id, name, value } = req.body;

//   fs.readFile(dataFilePath, 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).json({ error: 'Failed to create data' });
//     }

//     const jsonData = JSON.parse(data);
//     const newDataItem = { id, name, value };
//     jsonData.push(newDataItem);

//     fs.writeFile(dataFilePath, JSON.stringify(jsonData), 'utf8', err => {
//       if (err) {
//         console.error(err);
//         return res.status(500).json({ error: 'Failed to create data' });
//       }

//       return res.status(201).json(newDataItem);
//     });
//   });
// }

// function updateData(req, res) {
//   const { id } = req.params;
//   const { name, value } = req.body;

//   fs.readFile(dataFilePath, 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).json({ error: 'Failed to update data' });
//     }

//     const jsonData = JSON.parse(data);
//     const dataItem = jsonData.find(item => item.id === id);

//     if (!dataItem) {
//       return res.status(404).json({ error: 'Data not found' });
//     }

//     dataItem.name = name || dataItem.name;
//     dataItem.value = value || dataItem.value;

//     fs.writeFile(dataFilePath, JSON.stringify(jsonData), 'utf8', err => {
//       if (err) {
//         console.error(err);
//         return res.status(500).json({ error: 'Failed to update data' });
//       }

//       return res.json(dataItem);
//     });
//   });
// }

// function deleteData(req, res) {
//   const { id } = req.params;

//   fs.readFile(dataFilePath, 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).json({ error: 'Failed to delete data' });
//     }

//     const jsonData = JSON.parse(data);
//     const dataItemIndex = jsonData.findIndex(item => item.id === id);

//     if (dataItemIndex === -1) {
//       return res.status(404).json({ error: 'Data not found' });
//     }

//     const deletedDataItem = jsonData.splice(dataItemIndex, 1)[0];

//     fs.writeFile(dataFilePath, JSON.stringify(jsonData), 'utf8', err => {
//       if (err) {
//         console.error(err);
//         return res.status(500).json({ error: 'Failed to delete data' });
//       }

//       return res.json(deletedDataItem);
//     });
//   });
// }

// module.exports = {
//   getAllData,
//   getDataById,
//   createData,
//   updateData,
//   deleteData
// };
