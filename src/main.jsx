import React from 'react';
import { createRoot } from 'react-dom/client';
import EnrutadorDeApp from './enrutadores/EnrutadorDeApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

const root = createRoot(document.getElementById('root'))
root.render(<EnrutadorDeApp />);