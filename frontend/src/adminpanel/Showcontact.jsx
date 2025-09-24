// Showcontact.jsx
import React, { useEffect, useState } from 'react';

const Showcontact = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');

  const fetchContacts = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('http://localhost:9000/showcontact', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      });
      const data = await res.json();

      if (data?.statuscode === 1 && Array.isArray(data.data)) {
        setContacts(data.data);
      } else {
        setContacts([]);
      }
    } catch (err) {
      console.error(err);
      setError('Failed to load contact requests. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const filtered = contacts.filter((c) => {
    const q = query.toLowerCase();
    return (
      (c?.name || '').toLowerCase().includes(q) ||
      (c?.email || '').toLowerCase().includes(q) ||
      (c?.subject || '').toLowerCase().includes(q) ||
      (c?.contactNo || '').toLowerCase().includes(q) ||
      (c?.message || '').toLowerCase().includes(q)
    );
  });

  return (
    <div className="container my-5">
      {/* Header + Tools */}
      <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-4">
        <div className="mb-3 mb-md-0">
          <h1 className="h4 mb-1">Contact Requests</h1>
          <div className="text-muted small">
            {loading ? 'Loading...' : `${filtered.length} of ${contacts.length} shown`}
          </div>
        </div>

        <div className="d-flex gap-2">
          <input
            type="search"
            className="form-control"
            placeholder="Search name, email, subject, phone"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ minWidth: 260 }}
          />
          <button className="btn btn-outline-secondary" onClick={fetchContacts}>
            Refresh
          </button>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {/* Loading */}
      {loading ? (
        <div className="d-flex justify-content-center py-5">
          <div className="spinner-border" role="status" aria-hidden="true"></div>
          <span className="ms-2">Loading...</span>
        </div>
      ) : /* Empty */ filtered.length === 0 ? (
        <div className="text-center text-muted py-5">No contact requests found.</div>
      ) : (
        /* Table */
        <div className="table-responsive">
          <table className="table align-middle table-hover">
            <thead className="table-light">
              <tr>
                <th style={{ width: 56 }}>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact No.</th>
                <th>Subject</th>
                <th>Message</th>
                <th style={{ width: 180 }}>Submitted</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((c, i) => (
                <tr key={c?._id || i}>
                  <td>{i + 1}</td>
                  <td className="fw-semibold">{c?.name || '-'}</td>
                  <td>
                    {c?.email ? (
                      <a href={`mailto:${c.email}`} className="text-decoration-none">
                        {c.email}
                      </a>
                    ) : (
                      '-'
                    )}
                  </td>
                  <td>
                    {c?.contactNo ? (
                      <a href={`tel:${c.contactNo}`} className="text-decoration-none">
                        {c.contactNo}
                      </a>
                    ) : (
                      '-'
                    )}
                  </td>
                  <td>
                    <span className="badge bg-light text-dark border" title={c?.subject || ''}>
                      {c?.subject || '-'}
                    </span>
                  </td>
                  <td
                    className="text-truncate"
                    style={{ maxWidth: 360 }}
                    title={c?.message || ''}
                  >
                    {c?.message || '-'}
                  </td>
                  <td className="text-muted small">
                    {c?.createdAt
                      ? new Date(c.createdAt).toLocaleString()
                      : c?.updatedAt
                      ? new Date(c.updatedAt).toLocaleString()
                      : '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Showcontact;
