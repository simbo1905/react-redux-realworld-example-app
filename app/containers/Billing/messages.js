/*
 * Billing Messages
 *
 * This contains all the text for the Billing component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'app.pages.billing.title',
    defaultMessage: 'Billing',
  },
  header: {
    id: 'app.containers.billing.header',
    defaultMessage: 'Billing',
  },
  cardHeader: {
    id: 'app.containers.billing.card_header',
    defaultMessage: 'Update card information',
  },
  cardNumber: {
    id: 'app.containers.billing.card_number',
    defaultMessage: 'Credit Card Number',
  },
  month: {
    id: 'app.containers.billing.month',
    defaultMessage: 'Month',
  },
  year: {
    id: 'app.containers.billing.year',
    defaultMessage: 'Year',
  },
  cardFullName: {
    id: 'app.containers.billing.card_full_name',
    defaultMessage: 'Enter the full name of the credit card holder',
  },
  removeCard: {
    id: 'app.containers.billing.remove_card',
    defaultMessage: 'Remove card',
  },
  submit: {
    id: 'app.containers.billing.submit',
    defaultMessage: 'Submit',
  },
  pastInvoices: {
    id: 'app.containers.billing.past_invoices',
    defaultMessage: 'Past Invoices',
  },
  noMoreEntries: {
    id: 'app.containers.billing.no_more_entries',
    defaultMessage: 'No more entries.',
  },
});
