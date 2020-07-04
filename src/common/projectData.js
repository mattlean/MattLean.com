import FeaturedEswiss from '../front/assets/eswiss-featured-project.jpg'
import FeaturedGridnik from '../front/assets/gridnik-featured-project.jpg'

const ORDER = [
  'gridnik',
  'ml2020',
  'eswiss',
  'sot',
  'ffuh',
  'checkpoint',
  'ljsas',
  'crush',
  'adam',
  'alwp',
  'lean-space',
  'lantern',
  'themeboot',
]
const PROJECTS = {
  adam: {
    id: 'adam',
    name: 'Adam Engine',
    long: 'A 2D game engine built with HTML5 Canvas.',
    tags: ['game-engine', 'frontend'],
  },
  alwp: {
    id: 'alwp',
    name: 'Asset List Webpack Plugin',
    long:
      'A webpack plugin that output a list of generated assets with your bundle',
    tags: ['webpack-plugin', 'tooling'],
  },
  checkpoint: {
    id: 'checkpoint',
    name: 'Checkpoint.js',
    long: 'A data validation and transformation library.',
    tags: ['lib', 'frontend', 'backend'],
  },
  crush: {
    id: 'crush',
    name: 'qPCR Crush',
    long: 'An LGC Biosearch Technologies branded tile-matching game.',
    tags: ['game', 'backend', 'design', 'frontend'],
  },
  eswiss: {
    id: 'eswiss',
    name: 'eswiss',
    short:
      'A design system built on Swiss/International style design principles.',
    long:
      'A design system built on Swiss & International style design principles.',
    featured: {
      img: FeaturedEswiss,
      alt: 'Featured image for eswiss project: the eswiss logo',
    },
    tags: ['design-system', 'design', 'frontend'],
  },
  ffuh: {
    id: 'ffuh',
    name: 'express-ffuh',
    long:
      'An Express middleware that handles Amazon S3 and local file system uploads.',
    tags: ['express-middleware', 'backend'],
  },
  gridnik: {
    id: 'gridnik',
    name: 'Gridnik',
    short: "Extend Adobe XD's grid generation capabilities.",
    long: 'An Adobe XD plugin that extends its grid generation capabilities.',
    featured: {
      img: FeaturedGridnik,
      alt:
        'Featured image for Gridnik: a screenshot of a grid generated by the project',
    },
    tags: ['xd-plugin', 'design', 'frontend'],
  },
  lantern: {
    id: 'lantern',
    name: 'Lantern.js',
    long: 'A simple-to-use, lightweight, and customizable image lightbox.',
    tags: ['lib', 'frontend'],
  },
  'lean-space': {
    id: 'lean-space',
    name: 'Lean Space',
    long: 'The previous iteration of my personal website built in 2015.',
    tags: ['website', 'design', 'frontend'],
  },
  ljsas: {
    id: 'ljsas',
    name: 'Lean JavaScript Application Starter',
    long:
      'A starter project to kickoff development for your next web, Node.js, or desktop application.',
    tags: ['tooling'],
  },
  ml2020: {
    id: 'ml2020',
    name: 'MattLean.com',
    long:
      'The latest iteration of my personal website utilizing my personal identity.',
    tags: ['website', 'backend', 'design', 'design-system', 'frontend'],
  },
  sot: {
    id: 'sot',
    name: 'Spectral Overlay Tool',
    long:
      'A tool for visualizing absorption and emission spectra for fluorescent dyes and quenchers.',
    tags: ['web-app', 'design', 'frontend', 'tooling'],
  },
  themeboot: {
    id: 'themeboot',
    name: 'ThemeBoot',
    long:
      'A Bootstrap powered website layout built for use as a WordPress theme or a static HTML & CSS template.',
    tags: ['wordpress-theme', 'website-template', 'backend', 'frontend'],
  },
}

/**
 * Get all project data
 * @return {Array} Array of all project data in order
 */
export const getAllProjectData = () => {
  const data = []
  for (const i in ORDER) {
    data.push(getProjectData(ORDER[i]))
  }
  return data
}

/**
 * Get project data associated with given ID
 * @param {string} id Project ID
 * @return {Object} Project data
 */
export const getProjectData = (id) => {
  return PROJECTS[id]
}

/**
 * Get property value in project data associated with given ID
 * @param {string} id Project ID
 * @param {string} prop Project data property name
 * @return {Array|string} Value stored at project data property
 */
export const getProjectProp = (id, prop) => {
  if (PROJECTS[id]) {
    return PROJECTS[id][prop]
  }
}