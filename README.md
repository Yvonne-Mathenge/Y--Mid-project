# Mid-project-

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>USIU-Africa Visitor Management System</title>
    <style>
        :root {
            --primary-color: #003366; /* USIU blue */
            --secondary-color: #CC0000; /* Accent red */
            --light-color: #f8f9fa;
            --dark-color: #343a40;
            --success-color: #28a745;
            --warning-color: #ffc107;
            --danger-color: #dc3545;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background-color: #f5f5f5;
            color: var(--dark-color);
            line-height: 1.6;
        }
        
        .container {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        
        header {
            background-color: var(--primary-color);
            color: white;
            padding: 15px 0;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            display: flex;
            align-items: center;
        }
        
        .logo img {
            height: 50px;
            margin-right: 15px;
        }
        
        .logo h1 {
            font-size: 1.5rem;
            font-weight: 600;
        }
        
        nav ul {
            display: flex;
            list-style: none;
        }
        
        nav ul li {
            margin-left: 20px;
        }
        
        nav ul li a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            padding: 5px 10px;
            border-radius: 4px;
            transition: background-color 0.3s;
        }
        
        nav ul li a:hover, nav ul li a.active {
            background-color: rgba(255,255,255,0.2);
        }
        
        .main-content {
            display: grid;
            grid-template-columns: 1fr 3fr;
            gap: 20px;
            margin-top: 20px;
        }
        
        .sidebar {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            padding: 20px;
        }
        
        .sidebar h2 {
            color: var(--primary-color);
            margin-bottom: 15px;
            font-size: 1.2rem;
        }
        
        .sidebar-menu {
            list-style: none;
        }
        
        .sidebar-menu li {
            margin-bottom: 10px;
        }
        
        .sidebar-menu a {
            display: block;
            padding: 10px 15px;
            color: var(--dark-color);
            text-decoration: none;
            border-radius: 4px;
            transition: all 0.3s;
        }
        
        .sidebar-menu a:hover, .sidebar-menu a.active {
            background-color: var(--primary-color);
            color: white;
        }
        
        .content {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            padding: 20px;
        }
        
        .content-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 1px solid #eee;
        }
        
        .content-header h2 {
            color: var(--primary-color);
        }
        
        .btn {
            display: inline-block;
            padding: 8px 15px;
            background-color: var(--primary-color);
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-weight: 500;
            transition: background-color 0.3s;
        }
        
        .btn:hover {
            background-color: #002244;
        }
        
        .btn-success {
            background-color: var(--success-color);
        }
        
        .btn-success:hover {
            background-color: #218838;
        }
        
        .btn-danger {
            background-color: var(--danger-color);
        }
        
        .btn-danger:hover {
            background-color: #c82333;
        }
        
        .form-group {
            margin-bottom: 15px;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: 500;
        }
        
        .form-control {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 1rem;
        }
        
        .form-control:focus {
            border-color: var(--primary-color);
            outline: none;
            box-shadow: 0 0 0 2px rgba(0,51,102,0.2);
        }
        
        .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
        }
        
        .card {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            padding: 20px;
            margin-bottom: 20px;
        }
        
        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 1px solid #eee;
        }
        
        .card-header h3 {
            color: var(--primary-color);
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
        }
        
        table th, table td {
            padding: 12px 15px;
            text-align: left;
            border-bottom: 1px solid #eee;
        }
        
        table th {
            background-color: #f8f9fa;
            color: var(--primary-color);
            font-weight: 600;
        }
        
        table tr:hover {
            background-color: #f8f9fa;
        }
        
        .badge {
            display: inline-block;
            padding: 5px 10px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 500;
        }
        
        .badge-success {
            background-color: #d4edda;
            color: #155724;
        }
        
        .badge-warning {
            background-color: #fff3cd;
            color: #856404;
        }
        
        .badge-danger {
            background-color: #f8d7da;
            color: #721c24;
        }
        
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.5);
            z-index: 1000;
            justify-content: center;
            align-items: center;
        }
        
        .modal-content {
            background-color: white;
            border-radius: 8px;
            width: 90%;
            max-width: 600px;
            padding: 20px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
        
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 1px solid #eee;
        }
        
        .modal-header h3 {
            color: var(--primary-color);
        }
        
        .close {
            font-size: 1.5rem;
            cursor: pointer;
            color: #aaa;
        }
        
        .close:hover {
            color: var(--dark-color);
        }
        
        .alert {
            padding: 10px 15px;
            border-radius: 4px;
            margin-bottom: 15px;
        }
        
        .alert-success {
            background-color: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
        
        .alert-danger {
            background-color: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }
        
        .visitor-card {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 20px;
            margin-bottom: 20px;
        }
        
        .visitor-photo {
            width: 150px;
            height: 150px;
            background-color: #eee;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #aaa;
        }
        
        .visitor-info h3 {
            color: var(--primary-color);
            margin-bottom: 10px;
        }
        
        .visitor-info p {
            margin-bottom: 5px;
        }
        
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 15px;
            margin-bottom: 20px;
        }
        
        .stat-card {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            padding: 15px;
            text-align: center;
        }
        
        .stat-card h3 {
            font-size: 1.8rem;
            color: var(--primary-color);
            margin-bottom: 5px;
        }
        
        .stat-card p {
            color: var(--dark-color);
            font-weight: 500;
        }
        
        footer {
            background-color: var(--primary-color);
            color: white;
            text-align: center;
            padding: 15px 0;
            margin-top: 30px;
        }
        
        @media (max-width: 768px) {
            .main-content {
                grid-template-columns: 1fr;
            }
            
            .form-row {
                grid-template-columns: 1fr;
            }
            
            .stats-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .visitor-card {
                grid-template-columns: 1fr;
            }
            
            .header-content {
                flex-direction: column;
                text-align: center;
            }
            
            nav ul {
                margin-top: 15px;
                justify-content: center;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="container header-content">
            <div class="logo">
                <!-- Placeholder for USIU logo -->
                <div style="width: 50px; height: 50px; background-color: white; border-radius: 50%; display: flex; justify-content: center; align-items: center; color: var(--primary-color); font-weight: bold;">USIU</div>
                <h1>USIU-Africa Visitor Management System</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="#" class="active">Dashboard</a></li>
                    <li><a href="#">Reports</a></li>
                    <li><a href="#">Settings</a></li>
                    <li><a href="#">Logout</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <div class="container">
        <div class="main-content">
            <aside class="sidebar">
                <h2>Quick Actions</h2>
                <ul class="sidebar-menu">
                    <li><a href="#" class="active">Dashboard</a></li>
                    <li><a href="#" id="checkInBtn">Check-in Visitor</a></li>
                    <li><a href="#" id="checkOutBtn">Check-out Visitor</a></li>
                    <li><a href="#">Visitor Log</a></li>
                    <li><a href="#">Pre-register</a></li>
                    <li><a href="#">Departments</a></li>
                    <li><a href="#">Staff Directory</a></li>
                </ul>
                
                <h2 style="margin-top: 30px;">Statistics</h2>
                <div class="stats-grid">
                    <div class="stat-card">
                        <h3 id="visitorsToday">12</h3>
                        <p>Today</p>
                    </div>
                    <div class="stat-card">
                        <h3 id="visitorsWeek">87</h3>
                        <p>This Week</p>
                    </div>
                    <div class="stat-card">
                        <h3 id="visitorsMonth">342</h3>
                        <p>This Month</p>
                    </div>
                    <div class="stat-card">
                        <h3 id="visitorsOnsite">5</h3>
                        <p>On Site</p>
                    </div>
                </div>
            </aside>

            <main class="content">
                <div class="content-header">
                    <h2>Dashboard</h2>
                    <button class="btn" id="addVisitorBtn">Add New Visitor</button>
                </div>

                <div class="alert alert-success" id="successAlert" style="display: none;">
                    Visitor checked in successfully!
                </div>

                <div class="card">
                    <div class="card-header">
                        <h3>Current Visitors</h3>
                        <div>
                            <input type="text" class="form-control" placeholder="Search visitors..." style="width: 200px; display: inline-block;">
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table id="visitorsTable">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>ID Number</th>
                                    <th>Host</th>
                                    <th>Check-in Time</th>
                                    <th>Purpose</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody id="visitorsTableBody">
                                <!-- Visitor data will be populated by JavaScript -->
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        <h3>Recent Check-ins</h3>
                    </div>
                    <div id="recentVisitors">
                        <!-- Recent visitors will be populated by JavaScript -->
                    </div>
                </div>
            </main>
        </div>
    </div>

    <!-- Check-in Modal -->
    <div class="modal" id="checkInModal">
        <div class="modal-content">
            <div class="modal-header">
                <h3>Visitor Check-in</h3>
                <span class="close">&times;</span>
            </div>
            <form id="checkInForm">
                <div class="form-row">
                    <div class="form-group">
                        <label for="firstName">First Name</label>
                        <input type="text" id="firstName" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="lastName">Last Name</label>
                        <input type="text" id="lastName" class="form-control" required>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="idNumber">ID Number</label>
                        <input type="text" id="idNumber" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phone" class="form-control" required>
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" class="form-control">
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="host">Host Department/Person</label>
                        <select id="host" class="form-control" required>
                            <option value="">Select Host</option>
                            <option value="Admissions Office">Admissions Office</option>
                            <option value="Finance Department">Finance Department</option>
                            <option value="IT Department">IT Department</option>
                            <option value="Library">Library</option>
                            <option value="Student Affairs">Student Affairs</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="purpose">Purpose of Visit</label>
                        <select id="purpose" class="form-control" required>
                            <option value="">Select Purpose</option>
                            <option value="Meeting">Meeting</option>
                            <option value="Delivery">Delivery</option>
                            <option value="Interview">Interview</option>
                            <option value="Campus Tour">Campus Tour</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>
                
                <div class="form-group" id="otherPurposeGroup" style="display: none;">
                    <label for="otherPurpose">Specify Purpose</label>
                    <input type="text" id="otherPurpose" class="form-control">
                </div>
                
                <div class="form-group">
                    <label for="notes">Additional Notes</label>
                    <textarea id="notes" class="form-control" rows="3"></textarea>
                </div>
                
                <div class="form-group">
                    <button type="submit" class="btn">Check In</button>
                    <button type="button" class="btn btn-danger" id="cancelCheckIn">Cancel</button>
                </div>
            </form>
        </div>
    </div>

    <!-- Check-out Modal -->
    <div class="modal" id="checkOutModal">
        <div class="modal-content">
            <div class="modal-header">
                <h3>Visitor Check-out</h3>
                <span class="close">&times;</span>
            </div>
            <div id="checkOutVisitorInfo">
                <!-- Visitor information will be populated by JavaScript -->
            </div>
            <form id="checkOutForm">
                <div class="form-group">
                    <label for="checkOutTime">Check-out Time</label>
                    <input type="datetime-local" id="checkOutTime" class="form-control" required>
                </div>
                
                <div class="form-group">
                    <label for="checkOutNotes">Check-out Notes</label>
                    <textarea id="checkOutNotes" class="form-control" rows="3"></textarea>
                </div>
                
                <div class="form-group">
                    <button type="submit" class="btn btn-success">Check Out</button>
                    <button type="button" class="btn btn-danger" id="cancelCheckOut">Cancel</button>
                </div>
            </form>
        </div>
    </div>

    <footer>
        <div class="container">
            <p>&copy; 2023 United States International University - Africa. All rights reserved.</p>
        </div>
    </footer>

    <script>
        // Sample data for demonstration
        let visitors = [
            {
                id: 1,
                firstName: "John",
                lastName: "Doe",
                idNumber: "12345678",
                phone: "0712345678",
                email: "john.doe@example.com",
                host: "Admissions Office",
                purpose: "Meeting",
                checkInTime: "2023-10-15T09:30:00",
                checkOutTime: null,
                status: "Checked In"
            },
            {
                id: 2,
                firstName: "Jane",
                lastName: "Smith",
                idNumber: "87654321",
                phone: "0723456789",
                email: "jane.smith@example.com",
                host: "Finance Department",
                purpose: "Payment",
                checkInTime: "2023-10-15T10:15:00",
                checkOutTime: null,
                status: "Checked In"
            },
            {
                id: 3,
                firstName: "Robert",
                lastName: "Johnson",
                idNumber: "11223344",
                phone: "0734567890",
                email: "robert.j@example.com",
                host: "IT Department",
                purpose: "Interview",
                checkInTime: "2023-10-15T11:00:00",
                checkOutTime: "2023-10-15T12:30:00",
                status: "Checked Out"
            }
        ];

        // DOM elements
        const checkInModal = document.getElementById('checkInModal');
        const checkOutModal = document.getElementById('checkOutModal');
        const checkInForm = document.getElementById('checkInForm');
        const checkOutForm = document.getElementById('checkOutForm');
        const visitorsTableBody = document.getElementById('visitorsTableBody');
        const recentVisitors = document.getElementById('recentVisitors');
        const successAlert = document.getElementById('successAlert');
        const purposeSelect = document.getElementById('purpose');
        const otherPurposeGroup = document.getElementById('otherPurposeGroup');

        // Event listeners
        document.getElementById('addVisitorBtn').addEventListener('click', () => {
            checkInModal.style.display = 'flex';
        });

        document.getElementById('checkInBtn').addEventListener('click', () => {
            checkInModal.style.display = 'flex';
        });

        document.getElementById('checkOutBtn').addEventListener('click', () => {
            alert('Please select a visitor to check out from the table.');
        });

        document.querySelectorAll('.close').forEach(closeBtn => {
            closeBtn.addEventListener('click', () => {
                checkInModal.style.display = 'none';
                checkOutModal.style.display = 'none';
            });
        });

        document.getElementById('cancelCheckIn').addEventListener('click', () => {
            checkInModal.style.display = 'none';
        });

        document.getElementById('cancelCheckOut').addEventListener('click', () => {
            checkOutModal.style.display = 'none';
        });

        purposeSelect.addEventListener('change', () => {
            if (purposeSelect.value === 'Other') {
                otherPurposeGroup.style.display = 'block';
            } else {
                otherPurposeGroup.style.display = 'none';
            }
        });

        // Form submission handlers
        checkInForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const newVisitor = {
                id: visitors.length + 1,
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                idNumber: document.getElementById('idNumber').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                host: document.getElementById('host').value,
                purpose: document.getElementById('purpose').value === 'Other' 
                    ? document.getElementById('otherPurpose').value 
                    : document.getElementById('purpose').value,
                checkInTime: new Date().toISOString().slice(0, 16),
                checkOutTime: null,
                status: 'Checked In'
            };
            
            visitors.push(newVisitor);
            updateVisitorsTable();
            updateRecentVisitors();
            updateStats();
            
            checkInModal.style.display = 'none';
            checkInForm.reset();
            
            // Show success message
            successAlert.style.display = 'block';
            setTimeout(() => {
                successAlert.style.display = 'none';
            }, 3000);
        });

        checkOutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const visitorId = parseInt(document.getElementById('checkOutForm').dataset.visitorId);
            const visitorIndex = visitors.findIndex(v => v.id === visitorId);
            
            if (visitorIndex !== -1) {
                visitors[visitorIndex].checkOutTime = document.getElementById('checkOutTime').value;
                visitors[visitorIndex].status = 'Checked Out';
                
                updateVisitorsTable();
                updateRecentVisitors();
                updateStats();
                
                checkOutModal.style.display = 'none';
            }
        });

        // Functions to update UI
        function updateVisitorsTable() {
            visitorsTableBody.innerHTML = '';
            
            const currentVisitors = visitors.filter(v => v.status === 'Checked In');
            
            if (currentVisitors.length === 0) {
                visitorsTableBody.innerHTML = '<tr><td colspan="7" style="text-align: center;">No visitors currently checked in</td></tr>';
                return;
            }
            
            currentVisitors.forEach(visitor => {
                const row = document.createElement('tr');
                
                row.innerHTML = `
                    <td>${visitor.firstName} ${visitor.lastName}</td>
                    <td>${visitor.idNumber}</td>
                    <td>${visitor.host}</td>
                    <td>${formatDateTime(visitor.checkInTime)}</td>
                    <td>${visitor.purpose}</td>
                    <td><span class="badge badge-success">${visitor.status}</span></td>
                    <td>
                        <button class="btn btn-danger check-out-btn" data-id="${visitor.id}">Check Out</button>
                    </td>
                `;
                
                visitorsTableBody.appendChild(row);
            });
            
            // Add event listeners to check-out buttons
            document.querySelectorAll('.check-out-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const visitorId = parseInt(e.target.getAttribute('data-id'));
                    openCheckOutModal(visitorId);
                });
            });
        }

        function updateRecentVisitors() {
            recentVisitors.innerHTML = '';
            
            const recent = visitors
                .filter(v => v.status === 'Checked Out')
                .sort((a, b) => new Date(b.checkOutTime) - new Date(a.checkOutTime))
                .slice(0, 3);
            
            if (recent.length === 0) {
                recentVisitors.innerHTML = '<p>No recent check-outs</p>';
                return;
            }
            
            recent.forEach(visitor => {
                const visitorCard = document.createElement('div');
                visitorCard.className = 'visitor-card';
                
                visitorCard.innerHTML = `
                    <div class="visitor-photo">
                        <span>Photo</span>
                    </div>
                    <div class="visitor-info">
                        <h3>${visitor.firstName} ${visitor.lastName}</h3>
                        <p><strong>ID:</strong> ${visitor.idNumber}</p>
                        <p><strong>Host:</strong> ${visitor.host}</p>
                        <p><strong>Purpose:</strong> ${visitor.purpose}</p>
                        <p><strong>Check-in:</strong> ${formatDateTime(visitor.checkInTime)}</p>
                        <p><strong>Check-out:</strong> ${formatDateTime(visitor.checkOutTime)}</p>
                    </div>
                `;
                
                recentVisitors.appendChild(visitorCard);
            });
        }

        function updateStats() {
            const today = new Date().toISOString().split('T')[0];
            const visitorsToday = visitors.filter(v => 
                v.checkInTime && v.checkInTime.startsWith(today)
            ).length;
            
            document.getElementById('visitorsToday').textContent = visitorsToday;
            
            // For demo purposes, we'll set fixed values for week, month, and onsite
            document.getElementById('visitorsWeek').textContent = '87';
            document.getElementById('visitorsMonth').textContent = '342';
            
            const visitorsOnsite = visitors.filter(v => v.status === 'Checked In').length;
            document.getElementById('visitorsOnsite').textContent = visitorsOnsite;
        }

        function openCheckOutModal(visitorId) {
            const visitor = visitors.find(v => v.id === visitorId);
            
            if (visitor) {
                document.getElementById('checkOutForm').dataset.visitorId = visitorId;
                
                const visitorInfo = document.getElementById('checkOutVisitorInfo');
                visitorInfo.innerHTML = `
                    <div class="visitor-card">
                        <div class="visitor-photo">
                            <span>Photo</span>
                        </div>
                        <div class="visitor-info">
                            <h3>${visitor.firstName} ${visitor.lastName}</h3>
                            <p><strong>ID:</strong> ${visitor.idNumber}</p>
                            <p><strong>Host:</strong> ${visitor.host}</p>
                            <p><strong>Purpose:</strong> ${visitor.purpose}</p>
                            <p><strong>Check-in:</strong> ${formatDateTime(visitor.checkInTime)}</p>
                        </div>
                    </div>
                `;
                
                // Set current time as default check-out time
                const now = new Date();
                const localDateTime = now.toISOString().slice(0, 16);
                document.getElementById('checkOutTime').value = localDateTime;
                
                checkOutModal.style.display = 'flex';
            }
        }

        function formatDateTime(dateTimeString) {
            if (!dateTimeString) return 'N/A';
            
            const date = new Date(dateTimeString);
            return date.toLocaleString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        }

        // Initialize the application
        document.addEventListener('DOMContentLoaded', () => {
            updateVisitorsTable();
            updateRecentVisitors();
            updateStats();
        });
    </script>
</body>
</html>



