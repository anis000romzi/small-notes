/* eslint-disable no-alert */
import 'regenerator-runtime';
import API_ENDPOINT from '../globals/api-endpoint';
import { fetchWithToken } from '../helpers/access-token';

class NotesApiSource {
  static async login({ email, password }) {
    const response = await fetch(API_ENDPOINT.LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      alert(responseJson.message);
      return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
  }

  static async register({ name, email, password }) {
    const response = await fetch(API_ENDPOINT.REGISTER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      alert(responseJson.message);
      return { error: true };
    }

    return { error: false };
  }

  static async getUserLogged() {
    const response = await fetchWithToken(API_ENDPOINT.GET_USER_LOGGED);
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
  }

  static async addNote({ title, body }) {
    const response = await fetchWithToken(API_ENDPOINT.ADD_NOTE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, body }),
    });

    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      alert(responseJson.message);
      return { error: true };
    }

    return { error: false };
  }

  static async getActiveNotes() {
    const response = await fetchWithToken(API_ENDPOINT.GET_ACTIVE_NOTES);
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      alert(responseJson.message);
      return { error: true, data: [] };
    }

    return { error: false, data: responseJson.data };
  }

  static async getArchivedNotes() {
    const response = await fetchWithToken(API_ENDPOINT.GET_ARCHIVED_NOTES);
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      alert(responseJson.message);
      return { error: true, data: [] };
    }

    return { error: false, data: responseJson.data };
  }

  static async getNote(id) {
    const response = await fetchWithToken(API_ENDPOINT.GET_SINGLE_NOTE(id));
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      alert(responseJson.message);
      return { error: true, data: {} };
    }

    return { error: false, data: responseJson.data };
  }

  static async archiveNote(id) {
    const response = await fetchWithToken(API_ENDPOINT.ARCHIVE_NOTE(id), {
      method: 'POST',
    });
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      alert(responseJson.message);
      return { error: true };
    }

    return { error: false };
  }

  static async activateNote(id) {
    const response = await fetchWithToken(API_ENDPOINT.ACTIVATE_NOTE(id), {
      method: 'POST',
    });
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      alert(responseJson.message);
      return { error: true };
    }

    return { error: false };
  }

  static async deleteNote(id) {
    const response = await fetchWithToken(API_ENDPOINT.DELETE_NOTE(id), {
      method: 'DELETE',
    });
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      alert(responseJson.message);
      return { error: true };
    }

    return { error: false };
  }
}

export default NotesApiSource;
