import de from 'date-fns/esm/locale/de';
import enCA from 'date-fns/esm/locale/en-CA';
import enGB from 'date-fns/esm/locale/en-GB';
import enUS from 'date-fns/esm/locale/en-US';
import es from 'date-fns/esm/locale/es';
import fr from 'date-fns/esm/locale/fr';
import it from 'date-fns/esm/locale/it';

// locale id's coming from https://stackoverflow.com/questions/3191664/list-of-all-locales-and-their-short-codes
// added 'naked' language identifier for ease of use
const dateLocales = new Map<string, Locale>([
  ['en-US', enUS],
  ['en-CA', enCA],
  ['en-GB', enGB],
  ['en-AU', enGB],
  ['en-IE', enGB],
  ['en-IN', enGB],
  ['en-MY', enGB],
  ['en-NZ', enGB],
  ['en-PH', enGB],
  ['en-SG', enGB],
  ['en', enGB],
  ['es-ES', es],
  ['es', es],
  ['de-AT', de],
  ['de-CH', de],
  ['de-DE', de],
  ['de-LI', de],
  ['de-LU', de],
  ['de', de],
  ['fr-BE', fr],
  ['fr-CA', fr],
  ['fr-CH', fr],
  ['fr-FR', fr],
  ['fr-LU', fr],
  ['fr-MC', fr],
  ['fr', fr],
  ['it-CH', it],
  ['it-IT', it],
  ['it', it],
]);

export { dateLocales };
