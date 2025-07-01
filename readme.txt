# Image Processing API

A Node.js API that processes images using Sharp.js. This API allows users to:
- Upload images
- Resize images with custom dimensions
- View a gallery of uploaded images
- Access resized versions of images via URL parameters

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd level-4-udacity-final-project
```

2. Install dependencies:
```bash
npm install
```

3. Create the uploads directory:
```bash
mkdir uploads/images
```

## Usage

1. Start the server:
```bash
npm start
```

2. Access the application at `http://localhost:3000`

### Endpoints

- `GET /` - View the main page with upload form and gallery
- `POST /upload` - Upload a new image
- `GET /images/:filename?width=<width>&height=<height>` - Get a resized version of an image
- `GET /api/images` - Get a list of all available images

### Image Upload

- Only .jpg images are accepted
- Images are automatically resized based on provided dimensions
- Resized images are cached for future requests

### URL Parameters

- `width` - Desired width of the image (pixels)
- `height` - Desired height of the image (pixels)

## Example Usage

1. Upload an image:
```
POST /upload
Content-Type: multipart/form-data
file: <image.jpg>
width: 300
height: 200
```

2. Access a resized version:
```
GET /images/myimage.jpg?width=300&height=200
```

## Development

1. Run in development mode:
```bash
npm run dev
```

2. Run tests:
```bash
npm test
```

3. Build the project:
```bash
npm run build
```

## Project Structure

```
src/
├── api/
│   └── App.ts          # Main application file
├── frontend/
│   ├── index.html      # Frontend interface
│   └── style.css       # Styles
├── middleware/
│   ├── dimensionsFromUrl.ts   # Image resizing middleware
│   ├── resizingImage.ts       # Upload resizing middleware
│   └── upload.ts              # File upload middleware
├── routes/
├── test/               # Test files
└── utils/             # Utility functions
```

## Technologies Used

- Node.js
- Express
- Sharp.js for image processing
- TypeScript
- Jasmine for testing

## Scripts

- `npm start` - Start the server
- `npm test` - Run tests
- `npm run build` - Build the project
- `npm run dev` - Run in development mode

## Error Handling

The API includes error handling for:
- Invalid file types
- Missing files
- Invalid dimensions
- File system errors
- Processing errors

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request