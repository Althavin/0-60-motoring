require('dotenv').config();
const mongoose = require('mongoose');

const addTimestamps = async () => {
  const docs = await Blog.find({ createdAt: { $exists: false } });

  const promises = docs.map(doc => {
    doc.createdAt = new Date();
    doc.updatedAt = new Date();
    return doc.save();
  });

  await Promise.all(promises);

  console.log('Timestamps added to all documents');
};

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB');
//     // addTimestamps()
//     //   .then(() => mongoose.connection.close())
//     //   .catch(console.error);
//   })
//   .catch(console.error);

// const cheerio = require('cheerio');

 const fs = require('fs');
 const path = require('path');
 const { YoutubeLink, Blog } = require('./models');

// // Read the HTML content from a file
// const htmlContent = fs.readFileSync(path.join(__dirname, 'VIDEO LINKS.html'), 'utf8');

// // Load the HTML content into cheerio
// const $ = cheerio.load(htmlContent);

// // Extract all YouTube links
// const youtubeLinks = [];
// $('a').each((index, element) => {
//   const link = $(element).attr('href');
//   if (link.startsWith('https://youtu.be/')) {
//     youtubeLinks.push({ link, channel: '' });
//   }
// });

// // Convert the links to JSON
// const json = JSON.stringify(youtubeLinks, null, 2);

// // Output the JSON
// console.log(json);


// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB');
//    YoutubeLink.insertMany(youtubeLinks).then(()=>{
//        console.log("Inserted")
//        mongoose.connection.close();

//     }
//     ).catch(console.error)

//     addTimestamps()
//       .then(() => mongoose.connection.close())
//       .catch(console.error);
//   })
//   .catch(console.error);



// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB');

//     // Fetch all documents
//     // YoutubeLink.find().then(youtubeLinks => {
//     //   youtubeLinks.forEach(youtubeLink => {
//     //     // Replace 'youtu.be' with 'youtube.com'
//     //     const newLink = youtubeLink.link.replace('https://youtu.be/', 'https://www.youtube.com/watch?v=');

//     //     // Update the document
//     //     YoutubeLink.updateOne({ _id: youtubeLink._id }, { link: newLink })
//     //       .then(() => console.log(`Updated link for document with id ${youtubeLink._id}`));
//     //   });
//     // });
//   });


  // YoutubeLink.find().then(youtubeLinks => {
  //   const updatePromises = youtubeLinks.map(youtubeLink => {
  //     // Extract video id from the link
  //     const videoId = youtubeLink.link.split('v=')[1].split('?')[0];
  
  //     // Construct new link
  //     const newLink = `https://www.youtube.com/embed/${videoId}`;
  
  //     // Update the document and return the promise
  //     return YoutubeLink.updateOne({ _id: youtubeLink._id }, { link: newLink })
  //       .then(() => console.log(`Updated link for document with id ${youtubeLink._id}`));
  //   });
  
  //   // Wait for all updates to complete
  //   Promise.all(updatePromises)
  //     .then(() => {
  //       console.log('All updates completed');
  //       mongoose.connection.close();
  //     });
  // });



// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// .then(() => {
//   console.log('Connected to MongoDB');

//   // Fetch all documents with only _id and title
//   Blog.find({}, '_id title').then(blogs => {
//     // Convert the blogs to JSON
//     const json = JSON.stringify(blogs, null, 2);

//     // Write the JSON to a file
//     fs.writeFile('blogs.json', json, err => {
//       if (err) {
//         console.error('Error writing file:', err);
//       } else {
//         console.log('File written successfully');
//       }

//       // Close the MongoDB connection
//       mongoose.connection.close();
//     });
//   });
// });


// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB');

//     // Read the JSON file
//     fs.readFile('blogs.json', 'utf8', (err, data) => {
//       if (err) {
//         console.error('Error reading file:', err);
//         return;
//       }

//       // Parse the JSON into an array of objects
//       const blogs = JSON.parse(data);

//       // Update each document in the database
//       const updatePromises = blogs.map(blog => {
//         return Blog.updateOne({ _id: blog._id }, { title: blog.title })
//           .then(() => console.log(`Updated description for document with id ${blog._id}`));
//       });

//       // Wait for all updates to complete
//       Promise.all(updatePromises)
//         .then(() => {
//           console.log('All updates completed');
//           mongoose.connection.close();
//         });
//     });
//   });



// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB');

//     // Delete all documents from the Youtube model
//     return YoutubeLink.deleteMany({});
//   })
//   .then(() => {
//     console.log('All documents deleted');

//     // Read the video.json file
//     return fs.promises.readFile('video2.json', 'utf8');
//   })
//   .then(data => {
//     // Parse the JSON data into an array of objects
//     const videos = JSON.parse(data);

//     // Insert the array of objects into the Youtube model
//     return YoutubeLink.insertMany(videos);
//   })
//   .then(() => {
//     console.log('All videos inserted');
    
//     // Close the database connection
//     mongoose.connection.close();
//   })
//   .catch(err => {
//     console.error('Error:', err);
//   });

  async function normalizeTitles() {
    try {
      // Fetch all blogs
      const blogs = await Blog.find();
      const map = {
        '𝟎': '0', '𝟏': '1', '𝟐': '2', '𝟑': '3', '𝟒': '4',
        '𝟓': '5', '𝟔': '6', '𝟕': '7', '𝟖': '8', '𝟗': '9',
        '𝐀': 'A', '𝐁': 'B', '𝐂': 'C', '𝐃': 'D', '𝐄': 'E',
        '𝐅': 'F', '𝐆': 'G', '𝐇': 'H', '𝐈': 'I', '𝐉': 'J',
        '𝐊': 'K', '𝐋': 'L', '𝐌': 'M', '𝐍': 'N', '𝐎': 'O',
        '𝐏': 'P', '𝐐': 'Q', '𝐑': 'R', '𝐒': 'S', '𝐓': 'T',
        '𝐔': 'U', '𝐕': 'V', '𝐖': 'W', '𝐗': 'X', '𝐘': 'Y', '𝐙': 'Z',
        '𝐚': 'a', '𝐛': 'b', '𝐜': 'c', '𝐝': 'd', '𝐞': 'e',
        '𝐟': 'f', '𝐠': 'g', '𝐡': 'h', '𝐢': 'i', '𝐣': 'j',
        '𝐤': 'k', '𝐥': 'l', '𝐦': 'm', '𝐧': 'n', '𝐨': 'o',
        '𝐩': 'p', '𝐪': 'q', '𝐫': 'r', '𝐬': 's', '𝐭': 't',
        '𝐮': 'u', '𝐯': 'v', '𝐰': 'w', '𝐱': 'x', '𝐲': 'y', '𝐳': 'z'
      };
  
      // Iterate over each blog
      for (let blog of blogs) {
        // Normalize the title
        console.log(blog.title)
        const normalizedTitle = blog.title.split('').map(ch => map[ch] || ch).join('');
        console.log(normalizedTitle);
 
        // Update the blog with the normalized title
        blog.title = normalizedTitle;
        await blog.save();
      }
  
      console.log('All titles normalized');
  
      // Close the database connection
      mongoose.connection.close();
    } catch (err) {
      console.error('Error:', err);
    }
  }

 // normalizeTitles();